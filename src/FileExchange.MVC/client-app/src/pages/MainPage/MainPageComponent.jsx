import React, { useState, useEffect } from 'react';
import './MainPageComponent.scss';
import { useSelector, useDispatch } from 'react-redux';
import FileComponent from '../../components/FileComponent/FileComponent';
//import { addNewFile, getFiles } from '../../redux-resource/file-actions';
import { getFiles, fetchFilesDataThunk } from '../../redux-resource/file-reducer';

const MainPageComponent = (props) => {
       const fileList = useSelector(getFiles);
       //const [newFile, setNewFile] = useState('');
       const dispatch = useDispatch();

       // const clickNewFile = () => {
	//        dispatch(addNewFile(newFile));
	// };

       useEffect(() => {
              dispatch(fetchFilesDataThunk());
            }, [dispatch]);

       return (
              <div class="wrapper">
                     <div class="content">
                     <div class="title">File manager</div>
			{/* <input type="text" value={newFile} onChange={e => setNewFile(e.target.value)}></input>
			<button onClick={clickNewFile}>Add file</button> */}
                     <br/>
                     {fileList.payload.files.data.map((file, i) => <FileComponent file={file} key={i} />)}
                     </div>
              </div>
       );
     }
export default MainPageComponent;