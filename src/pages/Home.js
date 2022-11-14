import React, { useEffect, useState } from 'react';
import { Button, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Web3Selector, disconnect, web3instance, clearMessage } from '../store/reducers/web3Slice';
import Notynew from '../services/Notynew';


function Home() {
    const dispatch = useDispatch();
    const { web3, isLoading, isSuccess, address, isloginLoading, isLoginerror } = useSelector(Web3Selector);
    const [userAccount, setuserAccount] = useState(null);

    const gotoHref = (hrefDiv) => {
        const section = document.getElementById(`${hrefDiv}`);
        section.scrollIntoView({ behavior: 'smooth', top: '100px' });
    }

    const connectHandler = () => {
        dispatch(web3instance());
    }

    useEffect(() => {
        if (isSuccess) {
            Notynew("success", "topRight", "<b>Wallet Connected Successfully!!</b> <br/> You have connected your wallet", 3000)
            setModalShow(false);
            setuserAccount(address)
        }

        if (isSuccess === null) {
            setuserAccount(null)
        }
    }, [isSuccess])

    useEffect(() => {
        if (isLoginerror) {
            Notynew("error", "topRight", `<b>User Rejected!</b> <br/> ${isLoginerror}`, 3000)
            dispatch(clearMessage())
        }
    }, [isLoginerror])


    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", accountsChanged);
        } else {
            Notynew("error", "topRight", `<b>Metamask Error!</b> <br/> Please install Metamask.`, 3000)
        }
    }, [])

    const accountsChanged = async (newAccount) => {
        console.log("newAccount >>>>>>> ", newAccount);
        dispatch(web3instance());
    };

    const [modalShow, setModalShow] = React.useState(false);

    return <div className="home page">
        <h1>Connect MetaMask Wallet</h1>
        <Button
            className='main-btn btn-hover'
            onClick={() => { !isSuccess ? connectHandler() : dispatch(disconnect()) }}
        >
            {
                isloginLoading ?
                    <><Spinner animation="border" /> Loading... </> :
                    <>
                        <span>
                            {(userAccount && userAccount !== null) ? userAccount.substring(0, 8) + "..." : "Connect"}
                        </span>
                    </>
            }
        </Button>
    </div>
}

export default Home;