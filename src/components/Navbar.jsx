import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../App.css";
import { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [isClose, OpenSidebar] = useState(false);
  const [isOpen, OpenAccList] = useState(false);

  const buttonBar = () => OpenSidebar(!isClose);
  const buttonAcc = () => OpenAccList(!isOpen);

  return (
    <>
      <nav>
        <Button buttonBar={buttonBar} />
        <ul>
          <li className="acc" onClick={buttonAcc}>
            Account{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 48 48"
              className={isOpen ? "top" : ""}
            >
              <path
                fill="black"
                stroke="black"
                stroke-linejoin="round"
                stroke-width="4"
                d="M36 19L24 31L12 19z"
              />
            </svg>
            <div className={`nav ${isOpen ? "open" : ""}`}>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#00c200"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"
                    />
                  </svg>
                  Edit
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#00c200"
                      d="M14.945 1.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.524.525-.79 1.17-.929 1.928c-.135.737-.161 1.638-.167 2.72a.75.75 0 0 0 1.5.008c.006-1.093.034-1.868.142-2.457c.105-.566.272-.895.515-1.138c.277-.277.666-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h1c1.436 0 2.437.002 3.192.103c.734.099 1.122.28 1.4.556c.276.277.456.665.555 1.4c.102.754.103 1.756.103 3.191v8c0 1.435-.001 2.436-.103 3.192c-.099.734-.279 1.122-.556 1.399s-.665.457-1.399.556c-.755.101-1.756.103-3.192.103h-1c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.243-.244-.41-.572-.515-1.138c-.108-.589-.136-1.364-.142-2.457a.75.75 0 1 0-1.5.008c.006 1.082.032 1.983.167 2.72c.14.758.405 1.403.93 1.928c.601.602 1.36.86 2.26.982c.866.116 1.969.116 3.336.116h1.11c1.368 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-8.11c0-1.367 0-2.47-.116-3.337c-.121-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117z"
                    />
                    <path
                      fill="#00c200"
                      d="M15 11.25a.75.75 0 0 1 0 1.5H4.027l1.961 1.68a.75.75 0 1 1-.976 1.14l-3.5-3a.75.75 0 0 1 0-1.14l3.5-3a.75.75 0 1 1 .976 1.14l-1.96 1.68z"
                    />
                  </svg>{" "}
                  Log Out
                </a>
              </li>
            </div>
          </li>
          <li>
            <a href="" className="Membership">
              Membership
            </a>
          </li>
        </ul>
      </nav>
      <Sidebar isClose={isClose} />
      <Outlet />
    </>
  );
}

export default Navbar;
