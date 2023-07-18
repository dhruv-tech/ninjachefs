import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    SignIn,
  } from "@clerk/clerk-react";
  
  import styles from './controlBox.module.css';
export default function ControlBox({ setDialog }) {

    const openSignInDialog = () => {
        setDialog(true);
    }

    const openModal = () => {
        window.scrollTo({ top: 0, left: 0});
        document.querySelector('.add-item-modal-wrapper').style.display = 'unset';
        document.querySelector('body').style.overflowY = 'hidden';
    }



    return (
        <div className={styles.box}>
            <h1>Sharing is caring.</h1>
            <SignedIn>
                <button type="button" onClick={openModal}>Add Recipe</button>
            </SignedIn>
            
            <SignedOut>
                <button type="button" onClick={openSignInDialog}>Sign In</button>
            </SignedOut>

        </div>
    );
  }