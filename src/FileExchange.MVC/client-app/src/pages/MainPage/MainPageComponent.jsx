import React, { useState, useEffect } from 'react';
import './MainPageComponent.scss';
import { useSelector, useDispatch } from 'react-redux';
import FileComponent from '../../components/FileComponent/FileComponent';
import { addNewFile, getFiles } from '../../redux-resource/file-actions';

const MainPageComponent = (props) => {
       const fileList = useSelector(state => state.fileList);
       const [newFile, setNewFile] = useState('');
       const dispatch = useDispatch();

       const clickNewFile = () => {
	       dispatch(addNewFile(newFile));
	};

       useEffect(() => {
       //     fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}File/GetAll`)
       //    .then((response) => response.json())
       //         .then((data) => {
       //             setFiles(data);
       //    })
       //    .catch((err) => {
       //       console.log(err.message);
       //    });
              dispatch(getFiles());
       }, []);
   
       return (
              <div class="wrapper">
                     <div class="content">
                     <div class="title">File manager</div>
			<input type="text" value={newFile} onChange={e => setNewFile(e.target.value)}></input>
			<button onClick={clickNewFile}>Add file</button>
                     <br/>
                     {fileList.map((file, i) => <FileComponent file={file} key={i} />)}
                     </div>
              </div>
       );
     }
export default MainPageComponent;