import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
export default function SignOut() {
  const navigate = useNavigate()
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    
      localStorage.removeItem('user');
      Swal.fire({
        title: "xin chào quý khách!",
        html: "Chúc quý khách có 1 ngày tốt đẹp",
        icon:"warning",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
           
        }
        navigate('/');
    });
      
    } catch (error) {
    
    }
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}
