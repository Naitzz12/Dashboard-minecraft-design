function Dash() {
  return (
    <a href="" className={`list-server`}>
      <div className="server-dash">
        <div className="name-srv-list">
          <h3>Naitzz Server</h3>
          <p>Server Expired : 3/12/2025</p>
        </div>
        <div className="spec">
          <div className="memory">
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
              >
                <path
                  fill="white"
                  d="M232 58H24a14 14 0 0 0-14 14v128a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0V72a14 14 0 0 0-14-14M22 72a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2v98H22Zm90 78a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6H48a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6Zm-58-48h52v36H54Zm90 48h64a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6m6-48h52v36h-52Z"
                />
              </svg>
            </div>
            <div className="mem-txt">
              <h3>Memory</h3>
              <p>0/12GB</p>
            </div>
          </div>
          <div className="cpu">
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M10 14v-4h4v4zm1-1h2v-2h-2zm-1.5 6.539V18H7.616q-.691 0-1.153-.462T6 16.384V14.5H4.462v-1H6v-3H4.462v-1H6V7.616q0-.691.463-1.153T7.616 6H9.5V4.462h1V6h3V4.462h1V6h1.885q.69 0 1.152.463T18 7.616V9.5h1.539v1H18v3h1.539v1H18v1.885q0 .69-.462 1.152T16.384 18H14.5v1.539h-1V18h-3v1.539zM16.384 17q.231 0 .424-.192t.192-.424V7.616q0-.231-.192-.424T16.384 7H7.616q-.231 0-.424.192T7 7.616v8.769q0 .23.192.423t.423.192zM12 12"
                />
              </svg>
            </div>
            <div className="cpu-txt">
              <h3>CPU</h3>
              <p>0/300%</p>
            </div>
          </div>
          <div className="drive">
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
              >
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M11.5 1a2.5 2.5 0 0 1 2.385 1.756l1.76 6.14q.134.428.212.866q.107.352.109.738v1c0 .663-.263 1.3-.732 1.77c-.469.469-1.1.732-1.77.732h-11c-.663 0-1.3-.263-1.77-.732a2.5 2.5 0 0 1-.732-1.77v-1c0-.25.037-.499.11-.738a7 7 0 0 1 .211-.866l1.76-6.14A2.5 2.5 0 0 1 4.428 1h7.06zm1.97 8h-11a1.495 1.495 0 0 0-1.418 1.01A6 6 0 0 0 .97 11v.5a1.5 1.5 0 0 0 1.499 1.499h11a1.5 1.5 0 0 0 1.499-1.499V11q0-.499-.081-.99A1.5 1.5 0 0 0 13.468 9zm-.5 1a.997.997 0 0 1 1 1a.997.997 0 0 1-1 1a.997.997 0 0 1-1-1a.997.997 0 0 1 1-1M11.5 2H4.44a1.5 1.5 0 0 0-1.43 1.053l-1.44 5.12c.28-.11.584-.169.904-.169h11c.319 0 .624.06.904.169l-1.44-5.12A1.495 1.495 0 0 0 11.507 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="drive-txt">
              <h3>Drive</h3>
              <p>245.5MB/500GB</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Dash;
