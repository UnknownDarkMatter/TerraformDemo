using FileExchange.Business.Interfaces;
using FileExchange.Business.Services;
using FileExchange.Common;
using FileExchange.Data.Database.EfCore6;
using FileExchange.Data.Database.Interfaces;
using FileExchange.Data.Database.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddRazorPages((options) =>
{
    options.Conventions.AddPageRoute("/Index", "{*url}");
});

builder.Services.AddCors((options) =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .WithOrigins(builder.Configuration.GetValue<string>("CorsAllowedOrigin").Split(';'))
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

builder.Services.AddSwaggerGen();

switch (Constants.DbProvider)
{
    case DbProviderEnum.PostGresSQL:
        {
            builder.Services.AddDbContext<FileExchangeDbContext>((option) =>
                option.UseNpgsql(builder.Configuration.GetConnectionString("DbConnectionPostGresSQL")));
            break;
        }
    case DbProviderEnum.SQLServer:
        {
            builder.Services.AddDbContext<FileExchangeDbContext>((option) =>
                option.UseSqlServer(builder.Configuration.GetConnectionString("DbConnectionSQLServer")));
            break;
        }
    default:
        {
            throw new NotImplementedException(Constants.DbProvider.ToString());
        }
}

builder.Services.AddScoped<IFileRepository, FileRepository>();
builder.Services.AddScoped<IFileService, FileService>();

var app = builder.Build();

app.UseCors();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();

app.UseRouting();

app.MapControllers();
app.MapRazorPages();


using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<FileExchangeDbContext>();
    db.Database.Migrate();
}

app.Run();
