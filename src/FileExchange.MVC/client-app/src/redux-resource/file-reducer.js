import { useSelector, useDispatch } from 'react-redux';
import { GET_FILES } from './constants';

const defaultFileList = [{
	friendlyName:'my file',
	hashedName:''
}];

const fileListReducer = (state = defaultFileList, action) => {
	switch(action.type) {	
		case GET_FILES:{
        //    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}File/GetAll`)
        //   .then((response) => response.json())
        //        .then((data) => {
		// 			state = data;
		// 			useDispatch(data);
        //   })
        //   .catch((err) => {
        //      console.log(err.message);
        //   });

			return state;
		}
		default:{
			return state;
		}
	}
}

