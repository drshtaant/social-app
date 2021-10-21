const mongoose = require('mongoose');
const Product = require('./models/product');


const products = [
    {
        name: "Adarsh",
        img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Adarsh"
    },
    {
        name: "Rajeev",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Rajeev"
    },
    {
        name: "Adil",
        img: "https://images.unsplash.com/photo-1572965733194-784e4b4efa45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Adil"
    },
    {
        name: "Nidhi",
        img: "https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Nidhi"
    },
    {
        name: "Ruchika",
        img: "https://images.unsplash.com/photo-1471898554234-bcbfedd35134?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Ruchika"
    },
    {
        name: "Priya",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Priya"
    },
    {
        name: "Prem",
        img: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Prem"
    },
    {
        name: "Sukanya",
        img: "https://images.unsplash.com/photo-1498568715259-5c1dc96aa8e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Sukanya"
    },
    {
        name: "Naveen",
        img: "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Naveen"
    },
    {
        name: "Rishi",
        img: "https://images.unsplash.com/photo-1526313199968-70e399ffe791?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Rishi"
    },
    {
        name: "Sneha",
        img: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"My name is Sneha"
    },

]

const seedDB = async ()=>{
    
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;
