import React from 'react';
import './FileComponent.scss';
import { BsFileEarmark } from 'react-icons/bs';

const FileComponent = (props) => {
       return (
              <div class="wrapper">
                     <div class="content">
                            <div class="line">
                                   <BsFileEarmark size={30} />
                                   <div class="file-name">{props.file.friendlyName }</div>
                            </div>
                     </div>
              </div>
       );
     }
export default FileComponent;