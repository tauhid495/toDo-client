import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li ><NavLink to='/todo'>To-Do</NavLink></li>

                            <li ><NavLink to='/completed'>Completed</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Greetings From Tauhid</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li ><NavLink to='/todo'>To-Do</NavLink></li>

                        <li ><NavLink to='/completed'>Completed</NavLink>
                        </li>

                    </ul>
                </div>
                <div class="navbar-end">
                    <a className='btn btn-primary' href='mailto:tauhid495@gmail.com'>Mail Me</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;