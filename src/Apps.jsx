import { useState } from 'react';

//====Display Data to Functions===========
const user = {
    name: 'Monkey D Luffy',
    status: 'Captain',
    pirate: 'Mugiwara Pirate',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4H9NHFBKvcoj8ffniZ_PQr9dl3znOit45g&usqp=CAU',
    imageSize: 300,
};

//======Component user bio======
function Coba() {
    return (
        <div className='flex h-screen'>
            <div className='m-auto'>
                <img
                    src={user.image}
                    width={user.imageSize}
                    height={user.imageSize}
                    className='rounded-full'
                />
                <div className='text-center text-2xl m-5 font-semibold'>
                    <h1>{user.name}</h1>
                    <h1>
                        {user.status} in {user.pirate}
                    </h1>
                </div>
            </div>
        </div>
    );
}
//======Display Data to Functions==========

//=========Login Component=========
function Login() {
    return (
        <div className='flex h-screen justify-end'>
            <div className='m-10 text-right'>
                <button className='bg-orange-600 py-2 px-4 rounded-xl hover:bg-orange-500'>
                    Login
                </button>
            </div>
        </div>
    );
}

//=========Signin Component=======
function Signin() {
    return (
        <div className='flex h-screen justify-end'>
            <div className='m-10 text-right'>
                <button className='bg-orange-600 py-2 px-4 rounded-xl hover:bg-orange-500'>
                    Signin
                </button>
            </div>
        </div>
    );
}

//===========Conditional Rendering===============
function Check() {
    let content;
    if (0 == [3]) {
        content = <Signin />;
    } else {
        content = <Login />;
    }

    return <div>{content}</div>;
}

//=============Rendering List==============
const products = [
    { title: 'Orange', isFruit: true, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Star Fruit', isFruit: true, id: 3 },
    { title: 'Carrot', isFruit: false, id: 4 },
    { title: 'Tomato', isFruit: true, id: 5 },
];

//============List Component=============
function List() {
    const listItems = products.map((product) => (
        <li
            key={products.id}
            style={{
                color: product.isFruit ? 'black' : 'red',
            }}
        >
            {product.title}
        </li>
    ));

    return <ul>{listItems}</ul>;
}
//=======Rendering List=========

//=======Responding to Event==========
function MyButton() {
    function handleClick() {
        alert(1 + 1);
    }

    return (
        <button
            className='py-2 px-4 bg-orange-600 rounded-2xl border-2 border-solid border-black  overflow-hidden hover:bg-orange-400'
            onClick={handleClick}
        >
            Click me
        </button>
    );
}

function Click() {
    function event() {
        alert('Hello Boy!!!');
    }

    return (
        <button
            className='py-2 px-4 bg-sky-600 rounded-2xl border-2 border-solid border-black  overflow-hidden hover:bg-sky-400'
            onClic={event}
        >
            Click me
        </button>
    );
}

//Functions starting with use are called Hooks.

export default function Apps() {
    const [nilai, setNilai] = useState(0);

    function handleClick() {
        setNilai(nilai + 1);
    }
    return (
        <div>
            <h1 className='ml-5 mt-5'>Counters that update separately</h1>
            <MyButton2 nilai={nilai} onClick={handleClick} />
            <MyButton2 nilai={nilai} onClick={handleClick} />
        </div>
    );
}

//=======Updating the screen====
function MyButton2({ nilai, onClick }) {
    return (
        <button
            className='m-5 py-2 px-3  bg-sky-600 rounded-2xl border-2 border-solid border-black  overflow-hidden hover:bg-sky-500'
            onClick={onClick}
        >
            Clicked <span className='font-bold text-white'>{nilai}</span> times
        </button>
    );
}
