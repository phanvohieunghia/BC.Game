const Star = ({ height }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height}><path d="M490.7 345.4L435.6 256l55.1-89.38c14.87-24.25-3.62-54.61-33.12-54.61l-110.6-.005l-57.87-93.1C281.7 6.003 268.9 0 256 0C243.1 0 230.3 6.003 222.9 18L165 112H54.39c-29.62 0-47.99 30.37-33.12 54.62L76.37 256l-55.1 89.38C6.4 369.6 24.77 399.1 54.39 399.1h110.6l57.87 93.1C230.3 505.1 243.1 512 256 512c12.88 0 25.74-6.002 33.12-18l57.83-93.1h110.7C487.2 399.1 505.6 369.6 490.7 345.4zM256 73.77l23.59 38.23H232.5L256 73.77zM89.48 343.1l20.59-33.35l20.45 33.35H89.48zM110 201.3L89.48 168h41.04L110 201.3zM256 438.2l-23.59-38.25h47.08L256 438.2zM313.9 343.1H198L143.8 256l54.22-87.1h116L368.3 256L313.9 343.1zM381.3 343.1l20.67-33.29l20.52 33.29H381.3zM401.1 201.3l-20.51-33.29h41.04L401.1 201.3z" /></svg>

const Tag = ({ height }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 34" height={height}><defs><linearGradient id="a" x1="46.918%" x2="67.308%" y1="-2.474%" y2="94.802%"><stop offset="0%" stop-color="#10D763" /><stop offset="100%" stop-color="#0BC157" /></linearGradient><linearGradient id="b" x1="51.746%" x2="50%" y1="3.082%" y2="100%"><stop offset="0%" stop-color="#15BE5C" /><stop offset="100%" stop-color="#0D9747" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="#0F9949" d="M.955 11.592l4.3-6.88a1.677 1.677 0 012.438-.445l7.63 5.824a6.706 6.706 0 011.81 2.104l7.315 13.325-.928 2.982a1.677 1.677 0 01-1.247 1.141l-12.1 2.612a1.677 1.677 0 01-1.878-.944L.748 14.76a3.353 3.353 0 01.207-3.168z" /><path fill="#10D763" d="M2.524 9.777l2.84-5.079a1.677 1.677 0 012.363-.596l7.472 4.75a6.706 6.706 0 012.414 2.687l6.592 13.331a1.677 1.677 0 01-1.134 2.379L11.557 29.85a1.677 1.677 0 01-1.898-.947L2.394 12.792a3.353 3.353 0 01.13-3.015z" /><path fill="#0F9949" d="M8.5 7.944c.36-.2.449-.985 0-1.795-.449-.81-1.177-1.465-1.626-1.137-.448.327-.448 1.227 0 2.036.45.81 1.266 1.096 1.626.896z" /><path fill="url(#a)" d="M6.938 6.842c-.04-.144.107-.974-.261-3.3C6.009 1.321 4.61 1.006 4.47 1.006c-.093 0-.864.144-2.314.432C3.002.264 3.948-.187 4.994.084 6.798.475 8.688 2.79 8.02 7.614c-.163.147-.31-.009-.67-.266-.148-.106-.372-.362-.411-.506z" /><path fill="url(#b)" d="M4.327 6.274c-.746-.822-1.172-1.633-1.28-2.433-.143-1.076-.131-2.455 1.563-2.815.022.013-1.484-.711-2.414.36-.444.632-.497 1.764-.211 3.081.28 1.296 1.312 2.617 1.75 2.963-.047.01.15-.375.592-1.156z" /><path fill="#FFF" fill-rule="nonzero" d="M16.28 24.419l-.636-1.654c.783-.423 1.32-.96 1.61-1.612.29-.652.3-1.331.029-2.037-.255-.664-.661-1.137-1.218-1.421-.557-.283-1.268-.4-2.133-.35l-.793.046c-.543.024-.959-.004-1.247-.083-.289-.08-.497-.286-.624-.617-.131-.343-.1-.653.095-.93.194-.277.49-.492.885-.644a4.235 4.235 0 011.1-.256c.39-.04.772-.033 1.148.02l-.023-1.502a4.348 4.348 0 00-1.105-.046 5.976 5.976 0 00-1.018.18l-.616-1.606-1.204.462.616 1.605c-.76.354-1.296.854-1.606 1.501-.31.647-.32 1.35-.028 2.11.131.343.307.626.528.848.22.222.468.397.744.525.277.127.582.212.918.255.336.043.685.057 1.047.04l.815-.036c.575-.037 1.015-.003 1.32.101.303.105.517.317.64.638.131.343.102.667-.087.973-.19.306-.541.558-1.055.755a4.726 4.726 0 01-1.139.272c-.417.05-.86.023-1.329-.08l-.133 1.525c.46.08.901.108 1.32.082.42-.026.869-.106 1.346-.24l.628 1.638 1.204-.462z" /></g></svg>

const Lock = ({ height, width }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={height} width={width}>
    <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
  </svg>

const AngleRight = ({ height }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height={height}><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg>

const Discord = ({ height = 0, width = 0 }) =>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 1024 1024">
    <g id="icomoon-ignore"></g>
    <path fill="#7086d7" d="M643.62 594.229c-45.413 0-82.215-36.803-82.215-82.215s36.803-82.245 82.215-82.245c45.413 0 82.245 36.833 82.245 82.245s-36.833 82.215-82.245 82.215zM380.483 594.229c-45.413 0-82.215-36.803-82.215-82.215s36.803-82.245 82.215-82.245c45.413 0 82.245 36.833 82.245 82.245s-36.833 82.215-82.245 82.215zM954.236 670.702c-0.139-2.227 0-4.453 0.47-6.652-8.961-47.506-57.501-270.902-80.237-323.794-14.77-34.888-29.012-67.658-67.18-87.587-15.875-9.045-32.195-17.265-48.927-24.633-35.291-14.846-72.684-24.275-110.824-27.904-7.356-0.603-17.867-2.803-19.001 7.836-0.941 8.495 9.154 7.506 15.047 9.758 15.434 5.855 114.974 33.21 134.5 65.706-9.763 2.556-20.135 0.963-28.68-4.37-65.576-29.113-136.298-45.113-208.097-47.12-46.189-1.843-92.404 0.659-138.123 7.451-40.241 6.46-79.876 16.385-118.402 29.692 0 0-69.034 28.975-69.587 29.525 2.075-5.224 5.033-10.063 8.767-14.241 0 0 0-6.652 39.245-22.653 1.882-1.401 85.711-36.097 117.713-48.908 4.424-1.731 11.645-1.182 10.040-8.165s-7.965-4.783-12.834-4.646c-3.348 0-6.692 0.522-9.957 0.851-63.169 7.807-123.519 30.597-175.959 66.448-8.877 5.692-16.014 13.691-20.576 23.12-29.953 61.938-94.949 219.876-103.496 404.73-0.83 11.601 3.097 23.066 10.897 31.698 48.595 56.632 111.71 85.745 184.642 96.687 25.197 3.794 40.436-3.711 58.968-24.384 14.686-16.385 12.032-15.946 18.836-23.203 6.831-7.231 4.869-11.877-4.066-15.477-15.379-6.103-75.864-39.863-86.9-50.831-7.301-3.904-20.051-14.598-22.735-24.909 9.071 2.392 42.925 21.801 53.96 27.299 8.877 4.287 175.987 70.735 334.769 39.863 58.8-11.435 115.444-31.89 167.938-60.673 3.596-1.98 7.275-5.772 14.3-0.908-13.913 18.612-93.206 66.448-108.64 70.957s-11.893 9.98-4.536 18.887c7.356 8.908 26.193 35.822 31.003 39.313 0.941 1.018 1.963 2.035 2.959 2.941 15.156 3.382 112.899 0 179.277-53.169 31.696-25.705 65.715-49.539 55.426-98.53z"></path>
  </svg>
const BTC = ({ height = 0, width = 0 }) =>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 1024 1024">
    <g id="icomoon-ignore">
    </g>
    <path fill="#f4aa0b" opacity="0.8" d="M512 64c-124.278 0-235.522 50.11-316.707 131.293s-131.293 192.43-131.293 316.707c0 124.278 50.11 235.522 131.293 316.707s192.43 131.293 316.707 131.293c124.278 0 235.522-50.11 316.707-131.293s131.293-192.43 131.293-316.707c0-124.278-50.11-235.522-131.293-316.707s-192.43-131.293-316.707-131.293zM682.38 485.945c29.065 21.045 49.109 57.13 48.109 98.218 0 65.142-49.109 118.262-110.25 118.262-5.011 0-11.023 0-18.042 0s-16.034 0-25.054 0v93.206c0 4.011-4.011 9.022-9.022 9.022h-32.074c-5.011 0-10.022-5.011-10.022-9.022v-93.206h-51.114v93.206c0 4.011-5.011 9.022-10.022 9.022h-32.074c-4.011 0-9.022-5.011-9.022-9.022v-93.206h-100.226c-7.014 0-11.023-6.011-10.022-11.023l6.011-33.076c1-4.011 5.011-7.014 9.022-8.021 31.066-3.010 44.098-23.054 44.098-50.11v-198.445c0-31.066-19.043-54.119-55.121-57.13-5.011-1-9.022-5.011-9.022-10.022v-32.074c0-5.011 5.011-10.022 10.022-10.022h105.238v-93.206c0-4.011 5.011-9.022 10.022-9.022h31.066c5.011 0 10.022 4.011 10.022 9.022v93.206h51.114v-93.206c0-4.011 5.011-9.022 10.022-9.022h32.074c5.011 0 9.022 4.011 9.022 9.022v93.206c3.010 0 7.014 0 10.022 0s5.011 0 8.021 0c60.131 0 110.25 53.119 110.25 120.271 0 27.062-8.021 53.119-23.054 73.163zM474.914 369.684v105.238c0 0 9.022 0 28.065 0s35.076 0 50.11 0c29.065 0 53.119-24.054 53.119-53.119 0-28.065-24.054-52.119-53.119-52.119-15.033 0-31.066 0-50.11 0s-28.065 0-28.065 0zM579.152 628.261c29.065 0 53.119-23.054 53.119-52.119s-24.054-53.119-53.119-53.119c-15.033 0-36.078 0-63.141 0s-41.090 0-41.090 0v105.238c0 0 14.033 0 41.090 0s48.109 0 63.141 0z"></path>
  </svg>
const Facebook = ({ height = 0, width = 0 }) =>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 1024 1024">
    <g id="icomoon-ignore">
    </g>
    <path fill="#1973eb" d="M512 64c247.408 0 448 201.070 448 449.067 0 219.452-157.052 402.168-364.672 441.322v-321.364h100.8l7.56-98.543h-108.36v-76.958c0-26.468 23.66-35.954 50.092-35.954 26.404 0 54.74 8.194 54.74 8.194l16.968-100.87c0 0-36.064-12.293-121.8-12.293-52.612 0-83.216 20.095-105.504 49.595-21.14 27.9-21.868 72.89-21.868 102.077v66.208h-67.956v98.543h67.956v326.976c-226.744-22.172-403.956-213.812-403.956-446.933 0-247.997 200.592-449.067 448-449.067z"></path>
  </svg>
const Instagram = ({ height = 0, width = 'unset' }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height={height} width={width}>
    <g fill="#FE4070" fill-rule="nonzero"><path d="M11.584 0H4.415A4.42 4.42 0 0 0 0 4.415v7.17A4.42 4.42 0 0 0 4.415 16h7.17A4.42 4.42 0 0 0 16 11.585v-7.17A4.42 4.42 0 0 0 11.584 0Zm2.996 11.585a3 3 0 0 1-2.995 2.995h-7.17a3 3 0 0 1-2.995-2.995v-7.17A3 3 0 0 1 4.415 1.42h7.17a3 3 0 0 1 2.995 2.995v7.17Z" /><path d="M8 3.877A4.127 4.127 0 0 0 3.877 8 4.127 4.127 0 0 0 8 12.123 4.127 4.127 0 0 0 12.123 8 4.127 4.127 0 0 0 8 3.877Zm0 6.826A2.706 2.706 0 0 1 5.297 8 2.706 2.706 0 0 1 8 5.297 2.706 2.706 0 0 1 10.703 8 2.706 2.706 0 0 1 8 10.703ZM12.296 2.674a1.045 1.045 0 0 0-1.041 1.04c0 .274.111.543.305.737.193.193.462.305.736.305.274 0 .542-.112.736-.305.194-.194.305-.463.305-.736 0-.275-.111-.544-.305-.737a1.046 1.046 0 0 0-.736-.304Z" /></g></svg>
const Telegram = ({ height = 0, width = 'unset' }) =>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 1024 1024">
    <g id="icomoon-ignore">
    </g>
    <path fill="#26a7e8" d="M33.891 483.585l879.437-395.29c33.288-14.956 72.212 0.369 86.913 34.237 5.24 12.005 6.856 25.284 4.713 38.261l-118.026 713.487c-7.251 43.828-48.054 73.405-91.131 66.027-12.293-2.112-23.928-7.142-33.947-14.688l-297.42-224.17c-29.268-22.031-35.431-64.015-13.744-93.792 2.472-3.421 5.306-6.606 8.404-9.49l298.21-278.394c2.703-2.515 2.867-6.74 0.395-9.49-2.143-2.347-5.603-2.851-8.338-1.141l-452.523 285.133c-16.446 10.328-36.518 12.843-54.942 6.807l-205.432-67.435c-13.876-4.56-21.489-19.684-17.006-33.768 2.307-7.243 7.581-13.212 14.436-16.297z"></path>
  </svg>
const Twitter = ({ height = 0, width = 0 }) =>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 1024 1024">
    <g id="icomoon-ignore">
    </g>
    <path fill="#1ca1f3" d="M1004.3 211.427c-36.259 15.795-75.181 26.5-116.015 31.313 41.743-24.619 73.802-63.551 88.814-109.95-39.048 22.736-82.201 39.303-128.332 48.156-36.729-38.624-89.283-62.749-147.417-62.749-111.471 0-201.884 89.034-201.884 198.829 0 15.579 1.692 30.727 5.203 45.257-167.85-8.33-316.646-87.367-416.364-207.775-17.362 29.462-27.328 63.612-27.328 100.047 0 68.919 35.695 129.786 89.879 165.51-33.094-1.019-64.244-10.057-91.541-24.834v2.437c0 96.376 69.603 176.74 162.083 194.942-16.954 4.689-34.786 7.003-53.245 7.003-13.037 0-25.666-1.172-37.983-3.517 25.698 78.945 100.253 136.481 188.659 137.992-69.133 53.371-156.254 85.147-250.835 85.147-16.296 0-32.404-0.895-48.199-2.745 89.378 56.363 195.615 89.311 309.564 89.311 371.614 0 574.718-302.947 574.718-565.697 0-8.638-0.187-17.276-0.564-25.729 39.487-28.043 73.802-63.088 100.784-102.946z"></path>
  </svg>
const Medium = ({ height = 0, width = 'unset' }) =>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 1094 768">
    <title>medium-3</title>
    <g id="icomoon-ignore">
    </g>
    <path fill="#555b65" d="M611.386 384.005c0 158.236-127.405 286.512-284.558 286.512s-284.57-128.275-284.57-286.512c0-158.236 127.405-286.522 284.57-286.522s284.558 128.285 284.558 286.522z"></path>
    <path fill="#555b65" d="M923.556 384.005c0 148.945-63.703 269.738-142.284 269.738s-142.284-120.793-142.284-269.738c0-148.945 63.693-269.738 142.274-269.738s142.284 120.754 142.284 269.738z"></path>
    <path fill="#555b65" d="M1051.242 384.005c0 133.419-22.401 241.643-50.042 241.643s-50.033-108.195-50.033-241.643c0-133.448 22.401-241.643 50.033-241.643s50.042 108.185 50.042 241.643z"></path>
  </svg>
const Github = ({ height = 0, width = 0 }) =>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 1024 1024">
    <title></title>
    <g id="icomoon-ignore">
    </g>
    <path fill="#f73b11" opacity="0.8" d="M899.903 292.719c-40.060-70.361-94.402-126.068-163.035-167.128-68.643-41.062-143.584-61.589-224.872-61.589-81.276 0-156.241 20.534-224.872 61.589-68.642 41.061-122.98 96.767-163.040 167.128-40.054 70.359-60.083 147.192-60.083 230.498 0 100.067 28.482 190.050 85.458 269.973 56.969 79.927 130.568 135.236 220.786 165.929 10.502 1.999 18.274 0.593 23.331-4.182 5.055-4.778 7.581-10.766 7.581-17.933 0-1.195-0.098-11.954-0.294-32.289-0.201-20.335-0.294-38.072-0.294-53.21l-13.418 2.379c-8.554 1.608-19.346 2.286-32.376 2.094-13.023-0.185-26.542-1.584-40.539-4.186-14.004-2.578-27.030-8.556-39.084-17.926-12.052-9.366-20.604-21.63-25.662-36.769l-5.834-13.762c-3.887-9.161-10.010-19.336-18.372-30.492-8.361-11.164-16.818-18.734-25.374-22.721l-4.084-2.997c-2.722-1.992-5.248-4.394-7.581-7.182s-4.079-5.578-5.248-8.371c-1.168-2.795-0.201-5.088 2.916-6.888s8.748-2.674 16.918-2.674l11.662 1.786c7.777 1.598 17.401 6.37 28.876 14.35 11.469 7.97 20.901 18.333 28.29 31.085 8.947 16.348 19.729 28.805 32.376 37.377 12.636 8.573 25.374 12.851 38.206 12.851s23.913-0.995 33.25-2.982c9.327-1.995 18.076-4.992 26.25-8.974 3.5-26.721 13.030-47.248 28.578-61.594-22.162-2.389-42.091-5.982-59.791-10.766-17.688-4.788-35.967-12.558-54.827-23.332-18.868-10.76-34.52-24.12-46.962-40.055-12.444-15.946-22.654-36.882-30.618-62.788-7.969-25.914-11.956-55.811-11.956-89.694 0-48.243 15.363-89.297 46.086-123.184-14.392-36.271-13.034-76.93 4.079-121.976 11.277-3.593 28.003-0.896 50.165 8.070 22.167 8.972 38.4 16.653 48.706 23.027 10.31 6.37 18.571 11.767 24.794 16.142 36.173-10.361 73.504-15.542 111.999-15.542s75.836 5.182 112.011 15.542l22.164-14.345c15.159-9.57 33.056-18.343 53.657-26.315 20.611-7.967 36.371-10.164 47.266-6.571 17.492 45.047 19.054 85.704 4.657 121.976 30.721 33.887 46.091 74.95 46.091 123.184 0 33.883-4 63.872-11.959 89.985-7.966 26.118-18.269 47.032-30.901 62.788-12.648 15.75-28.403 29.007-47.259 39.764-18.861 10.766-37.147 18.535-54.838 23.322-17.698 4.788-37.623 8.386-59.789 10.777 20.214 17.933 30.324 46.238 30.324 84.904v126.156c0 7.167 2.431 13.149 7.297 17.933 4.859 4.774 12.535 6.177 23.037 4.179 90.23-30.689 163.827-85.999 220.794-165.926 56.963-79.924 85.453-169.906 85.453-269.973-0.019-83.293-20.061-160.12-60.097-230.482z"></path>
  </svg>
const Bars = ({ height = 'unset', width = 'unset' }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={height} width={width}>
    <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>


const Icons = { Star, Tag, Lock, AngleRight, Discord, BTC, Facebook, Twitter, Instagram, Telegram, Medium, Github, Bars }
export default Icons