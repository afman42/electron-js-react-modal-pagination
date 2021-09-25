import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modalo from './Modalo'

const TableCard = ({ post,index, notActive }) => {
	const [modalShow, setModalShow] = useState(false);
	if(notActive){
		return (
		  	<tr>
		      <td align="center" colSpan="4">Tidak Ada Data</td>
		    </tr>
		);	
	}
	return (
	  	<>
	  	<tr>
	      <th scope="row">{ index + 1 }</th>
	      <td>{post.title}</td>
	      <td>{post.body}</td>
	      <td>
	      	<Button variant="primary" onClick={() => setModalShow(true)}>
		        Modal
		    </Button>
	      </td>
	    </tr>
	    <Modalo show={modalShow} onHide={() => setModalShow(false)} post={post} />
	    </>
	);
}

export default TableCard