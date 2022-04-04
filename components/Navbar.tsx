function Navbar() {
  return (
    <div className="fixed bottom-0">
      <button navbar-toggle>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="w11" d="M20 20H25V24H20V20Z" fill="black" />
          <path id="w12" d="M15 20H20V24H15V20Z" fill="black" />
          <path id="w13" d="M10 20H15V24H10V20Z" fill="black" />
          <path id="w14" d="M5 20H10V24H5V20Z" fill="black" />
          <path id="w15" d="M5 13H25V17H5V13Z" fill="black" />
          <path id="w16" d="M20 6H25V10H20V6Z" fill="black" />
          <path id="w17" d="M15 6H20V10H15V6Z" fill="black" />
          <path id="w18" d="M10 6H15V10H10V6Z" fill="black" />
          <path id="w19" d="M5 6H10V10H5V6Z" fill="black" />
        </svg>
      </button>

      <svg
        width="0"
        height="0"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="w21"
          style={{ visibility: "hidden" }}
          d="M21 21H25V25H21V21Z"
          fill="black"
        />
        <path
          id="w22"
          style={{ visibility: "hidden" }}
          d="M17 17H21V21H17V17Z"
          fill="black"
        />
        <path
          id="w23"
          style={{ visibility: "hidden" }}
          d="M9 17H13V21H9V17Z"
          fill="black"
        />
        <path
          id="w24"
          style={{ visibility: "hidden" }}
          d="M5 21H9V25H5V21Z"
          fill="black"
        />
        <path
          id="w25"
          style={{ visibility: "hidden" }}
          d="M13 13H17V17H13V13Z"
          fill="black"
        />
        <path
          id="w26"
          style={{ visibility: "hidden" }}
          d="M21 5H25V9H21V5Z"
          fill="black"
        />
        <path
          id="w27"
          style={{ visibility: "hidden" }}
          d="M17 9H21V13H17V9Z"
          fill="black"
        />
        <path
          id="w28"
          style={{ visibility: "hidden" }}
          d="M9 9H13V13H9V9Z"
          fill="black"
        />
        <path
          id="w29"
          style={{ visibility: "hidden" }}
          d="M5 5H9V9H5V5Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default Navbar;
