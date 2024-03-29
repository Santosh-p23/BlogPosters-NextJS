import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="header navbar bg-base-100 bg-neutral fixed top-0">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">BlogPosters</a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/movie?w=150&h=220" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a href="/login" className="justify-between">
              Sign In
              {/* <span className="badge">New</span> */}
            </a>
          </li>
          <li><a href="/register">Sign Up</a></li>
          <li><a onClick ={()=>{}}>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Header