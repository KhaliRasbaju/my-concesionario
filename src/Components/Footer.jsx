//Importa Iconos de una Libreria

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  //Retorna la estructura del footer
  return (
    <div>
      <div>
        {/* Icono Whatsapp */}
        <a href="https://wa.me/573188723997" target="_blank">
          <svg viewBox="0 0 32 32" class="whatsapp-ico">
            <path
              d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      {/* Sección del footer */}
      <footer className="footer">
        {/* Sección del  principal*/}
        <section className="principal">
          <h2>
            Car<span>Hub</span>
          </h2>

          <div className="icono">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="422.000000pt"
              height="413.000000pt"
              viewBox="0 0 422.000000 413.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,413.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1926 3979 c-464 -47 -885 -254 -1196 -587 -77 -81 -192 -228 -238
  -302 -31 -49 -132 -258 -132 -272 0 -7 30 48 68 122 70 140 117 215 200 318
  286 357 663 587 1117 683 99 21 135 24 360 23 235 0 257 -2 375 -28 246 -54
  464 -146 665 -281 98 -65 291 -228 338 -284 150 -182 209 -269 290 -428 134
  -263 198 -536 198 -848 0 -317 -62 -572 -207 -855 -186 -361 -474 -642 -849
  -827 -71 -36 -119 -62 -105 -58 34 9 226 102 275 134 22 14 47 30 56 36 178
  111 377 310 532 532 53 75 158 283 199 393 141 374 150 853 22 1235 -14 44
  -27 86 -27 93 0 6 -4 12 -9 12 -4 0 -8 6 -8 13 0 6 -25 63 -55 125 -127 263
  -329 507 -565 682 -262 195 -557 317 -865 359 -109 15 -341 20 -439 10z"
                />
                <path
                  d="M1840 3925 c-642 -91 -1202 -530 -1445 -1136 -76 -188 -135 -459
  -135 -620 l0 -49 325 0 325 0 0 59 c0 155 72 391 163 536 111 177 287 345 460
  440 280 154 674 180 989 65 205 -75 395 -218 534 -402 140 -187 215 -380 232
  -599 l7 -94 324 -3 324 -2 -6 110 c-8 138 -46 325 -92 461 -222 639 -759 1101
  -1425 1225 -122 23 -446 27 -580 9z m469 -6 c165 -20 391 -81 521 -141 227
  -103 374 -204 544 -372 148 -146 225 -243 309 -389 32 -54 57 -100 57 -102 0
  -2 13 -32 29 -67 88 -196 143 -409 156 -610 l7 -108 -310 0 -310 0 -6 23 c-3
  12 -6 40 -6 61 0 109 -59 317 -126 447 -42 81 -124 191 -204 274 -73 77 -110
  108 -210 179 -47 32 -214 116 -234 116 -8 0 -17 4 -20 8 -6 10 -101 35 -192
  52 -70 12 -315 16 -389 5 -115 -16 -330 -83 -374 -117 -13 -10 -27 -18 -32
  -18 -4 0 -30 -14 -56 -32 -266 -177 -454 -426 -528 -704 -19 -70 -22 -88 -30
  -179 -4 -38 -8 -80 -11 -92 l-4 -23 -299 0 c-252 0 -300 2 -311 15 -26 31 23
  342 82 520 67 201 156 372 282 540 73 98 257 282 349 350 37 28 84 62 104 78
  20 15 42 27 49 27 8 0 14 4 14 8 0 9 51 36 195 102 143 66 337 122 485 139 52
  6 106 13 120 15 59 8 271 5 349 -5z"
                />
                <path
                  d="M2371 3751 c-12 -8 -38 -97 -66 -225 -16 -77 -13 -86 38 -86 21 0 30
  6 34 21 5 19 11 20 47 15 22 -4 44 -12 48 -19 4 -6 10 -8 14 -4 12 12 -7 23
  -58 36 -60 14 -58 14 -58 -8 0 -25 -15 -34 -44 -27 l-23 6 32 135 c18 75 35
  138 37 141 3 3 17 2 31 -1 22 -6 25 -11 20 -35 -5 -27 -2 -29 37 -40 53 -14
  74 -10 78 15 4 19 3 19 -10 2 -13 -17 -18 -18 -57 -6 -37 11 -42 15 -37 35 5
  18 0 26 -22 38 -15 8 -34 11 -41 7z"
                />
                <path
                  d="M1730 3729 c-39 -16 -80 -60 -80 -86 0 -39 42 -217 54 -229 7 -7 22
  -8 42 -3 24 7 33 17 43 49 6 22 15 40 20 40 4 0 20 -13 36 -30 21 -22 36 -29
  57 -26 47 5 51 18 17 64 -25 34 -29 45 -19 57 21 25 -2 118 -37 154 -18 18
  -100 24 -133 10z m123 -19 c17 -14 29 -37 36 -71 15 -67 14 -69 -9 -69 -28 0
  -25 -8 20 -60 l40 -45 -33 -7 c-29 -7 -35 -4 -68 33 -39 44 -40 44 -59 -16
  -14 -44 -25 -55 -55 -55 -18 0 -23 13 -43 111 -19 100 -20 114 -7 140 17 32
  27 40 69 50 54 12 83 10 109 -11z"
                />
                <path
                  d="M1798 3660 c29 -12 24 -32 -9 -41 -20 -6 -21 -7 -4 -8 11 0 27 4 35
  9 19 12 2 44 -26 47 -14 2 -13 0 4 -7z"
                />
                <path
                  d="M1732 3648 c-11 -14 -4 -78 8 -78 15 0 18 39 4 44 -21 8 -17 26 9 36
  15 6 17 9 6 9 -9 1 -21 -5 -27 -11z"
                />
                <path
                  d="M2550 3700 c8 -5 23 -10 33 -10 22 0 22 3 -13 -146 -17 -70 -28 -129
  -26 -132 3 -2 8 9 12 24 4 16 17 71 30 122 30 117 30 130 -2 142 -33 13 -54
  13 -34 0z"
                />
                <path
                  d="M2789 3604 c-14 -18 -73 -123 -95 -173 -27 -59 3 -114 85 -156 40
  -20 92 -14 119 15 25 27 112 185 112 204 0 16 -29 36 -54 36 -8 0 -27 -20 -41
  -44 -28 -48 -39 -50 -69 -9 -18 24 -18 27 -2 59 22 46 21 51 -13 68 -26 14
  -30 14 -42 0z m56 -24 c4 -6 -3 -27 -15 -47 l-21 -36 37 -39 c21 -21 41 -38
  44 -38 3 0 18 23 33 50 31 54 34 57 62 37 17 -13 15 -19 -35 -111 -43 -81 -59
  -101 -87 -112 -32 -14 -38 -13 -89 10 -42 20 -58 33 -69 60 -17 41 -15 49 50
  170 41 75 49 85 65 76 11 -6 22 -15 25 -20z"
                />
                <path
                  d="M2764 3414 c-9 -13 -14 -27 -11 -30 3 -3 8 4 12 15 9 28 14 27 53
  -13 35 -36 29 -55 -10 -36 -22 11 -22 10 -4 -4 24 -19 30 -20 44 -3 8 9 0 23
  -29 54 l-39 42 -16 -25z"
                />
                <path
                  d="M2395 3589 c-9 -26 -7 -28 55 -44 49 -13 51 -13 59 8 10 27 5 37 -17
  37 -15 0 -15 -2 -2 -10 11 -7 12 -12 4 -20 -16 -16 -78 2 -82 23 -3 14 3 16
  30 12 29 -4 30 -4 8 4 -39 14 -48 12 -55 -10z"
                />
                <path
                  d="M1299 3560 l-24 -21 33 16 33 16 95 -78 c53 -43 107 -88 121 -100
  l26 -21 -29 -15 c-30 -15 -30 -15 -113 54 -46 38 -85 68 -87 66 -2 -2 -1 -17
  2 -33 4 -19 26 -46 66 -78 l61 -50 -31 -15 c-29 -13 -33 -13 -50 2 -24 22 -32
  21 -32 -3 0 -22 15 -27 23 -7 4 10 6 10 6 0 1 -19 43 -15 70 6 l24 19 -46 44
  c-64 60 -48 69 19 12 38 -32 59 -44 72 -40 20 7 58 44 51 50 -2 2 -44 37 -94
  77 -165 136 -157 132 -196 99z"
                />
                <path
                  d="M1287 3440 c8 -135 10 -151 21 -185 15 -44 13 -17 -8 140 -18 131
  -19 134 -13 45z"
                />
                <path
                  d="M2472 3426 c3 -20 58 -43 58 -25 0 5 -9 9 -20 9 -10 0 -24 8 -30 18
  -10 16 -11 16 -8 -2z"
                />
                <path
                  d="M3075 3284 c-44 -46 -87 -92 -95 -101 -31 -34 67 52 128 114 35 34
  67 63 71 63 4 0 34 -27 66 -60 31 -34 60 -59 63 -56 9 10 -115 126 -134 125
  -11 -1 -55 -39 -99 -85z"
                />
                <path
                  d="M1000 3330 c-68 -19 -111 -75 -112 -143 -2 -82 52 -147 135 -162 72
  -14 154 50 172 133 7 32 7 32 -34 32 -23 0 -41 -4 -41 -10 0 -19 -19 -10 -54
  26 -29 30 -34 40 -25 56 6 10 8 27 6 36 -3 12 -5 10 -6 -6 -1 -13 -10 -26 -21
  -30 -18 -7 -14 -13 39 -66 52 -51 59 -55 64 -37 8 31 57 29 57 -1 0 -34 -35
  -85 -69 -103 -99 -50 -211 16 -211 125 0 74 41 124 115 140 16 3 25 8 20 11
  -6 4 -21 3 -35 -1z"
                />
                <path
                  d="M3157 3262 c-16 -17 -15 -20 18 -52 33 -32 36 -33 52 -17 17 16 16
  19 -18 53 -34 34 -36 34 -52 16z m53 -27 c20 -22 21 -25 6 -31 -18 -7 -60 32
  -50 47 9 14 19 11 44 -16z"
                />
                <path
                  d="M1355 3249 c-16 -10 -25 -19 -19 -19 7 0 22 9 35 20 30 24 23 24 -16
  -1z"
                />
                <path
                  d="M3301 3209 c0 -15 -11 -38 -22 -53 -16 -20 -19 -30 -10 -39 6 -6 11
  -14 11 -17 0 -3 -36 -24 -80 -45 l-80 -39 -73 72 c-40 40 -77 72 -82 72 -5 0
  25 -34 67 -75 42 -41 83 -75 92 -75 8 0 48 18 88 39 53 29 72 45 71 58 -1 10
  5 33 13 51 8 18 13 43 11 55 -4 19 -4 19 -6 -4z"
                />
                <path
                  d="M960 3174 c0 -21 3 -24 13 -15 10 8 20 4 41 -18 25 -26 26 -30 9 -34
  -11 -3 -7 -5 12 -6 l29 -1 -49 50 c-27 28 -51 50 -52 50 -2 0 -3 -12 -3 -26z"
                />
                <path
                  d="M3077 3182 c-16 -17 -15 -20 21 -54 33 -33 39 -35 60 -24 22 12 22
  12 -21 54 -42 41 -44 42 -60 24z m58 -32 c24 -25 26 -30 11 -36 -19 -7 -71 39
  -61 56 10 16 19 12 50 -20z"
                />
                <path
                  d="M970 3136 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
  13z"
                />
                <path
                  d="M1892 3246 c-287 -55 -530 -204 -713 -438 -19 -23 18 9 81 72 205
  206 425 325 660 356 77 10 338 6 380 -6 19 -5 47 -10 63 -10 15 0 35 -4 45 -9
  9 -5 42 -17 72 -26 145 -47 291 -138 416 -259 87 -85 174 -190 173 -210 -1 -5
  3 -12 8 -15 12 -8 75 -130 102 -198 59 -146 83 -386 56 -568 -29 -204 -95
  -365 -220 -534 -28 -39 -189 -193 -232 -222 -26 -18 -61 -47 -78 -63 l-30 -31
  30 19 c297 189 497 489 545 817 19 130 8 349 -23 470 -67 257 -205 464 -419
  630 -141 108 -257 166 -425 210 -103 27 -383 35 -491 15z"
                />
                <path
                  d="M1988 3208 c-13 -3 -38 -6 -57 -7 -19 -1 -48 -5 -65 -10 -17 -6 -65
  -20 -106 -32 -129 -38 -283 -125 -384 -219 -119 -110 -151 -147 -190 -217 -15
  -26 -19 -37 -9 -23 214 296 476 454 814 492 244 27 513 -40 720 -178 562 -378
  654 -1165 193 -1662 -55 -60 -162 -149 -240 -199 -15 -10 -13 -10 11 -1 17 7
  38 18 48 26 9 9 17 12 17 9 0 -19 238 218 278 276 39 58 112 209 142 292 50
  138 67 403 36 552 -31 146 -93 296 -171 413 -54 81 -186 219 -265 277 -67 49
  -196 123 -216 123 -8 0 -14 5 -14 10 0 6 -9 10 -20 10 -10 0 -32 5 -47 11 -60
  24 -70 27 -123 38 -121 23 -302 34 -352 19z"
                />
                <path
                  d="M1924 3140 c-406 -73 -739 -383 -845 -788 -27 -100 -36 -292 -20
  -403 35 -234 145 -446 320 -611 130 -123 263 -199 446 -255 84 -25 102 -27
  275 -27 174 0 190 2 275 28 220 67 375 165 519 326 116 130 201 302 238 479
  27 129 21 356 -12 476 -83 307 -303 566 -585 693 -146 65 -235 84 -405 88 -85
  1 -178 -1 -206 -6z m356 -15 c32 -5 84 -19 120 -32 8 -3 22 -7 30 -8 40 -7
  170 -70 247 -122 97 -64 224 -188 280 -272 64 -96 121 -224 149 -332 23 -88
  27 -126 28 -249 1 -145 -6 -194 -45 -327 -24 -83 -102 -242 -139 -283 -17 -19
  -30 -37 -30 -40 0 -4 -30 -38 -67 -77 -153 -158 -344 -261 -570 -308 -15 -3
  -82 -8 -148 -10 -190 -7 -345 29 -520 119 -60 31 -125 71 -135 84 -3 4 -30 27
  -60 52 -55 46 -109 100 -110 111 0 3 -16 23 -35 44 -20 20 -47 58 -61 84 -13
  25 -29 53 -34 61 -14 21 -55 118 -69 160 -31 100 -43 191 -42 330 0 123 4 161
  26 245 27 106 103 273 154 340 62 82 96 124 102 124 3 1 26 20 50 44 150 144
  357 244 549 263 30 4 57 8 60 11 6 6 215 -3 270 -12z"
                />
                <path
                  d="M1945 3079 c-175 -26 -383 -128 -527 -258 -45 -41 -158 -180 -158
  -194 0 -3 -13 -28 -28 -54 -153 -260 -160 -615 -17 -913 117 -245 338 -428
  620 -513 94 -28 110 -30 260 -30 163 0 256 15 358 58 20 8 37 12 37 8 0 -5 4
  -3 8 3 4 6 31 24 61 38 219 111 419 350 485 580 107 371 16 736 -250 1000 -79
  78 -156 132 -268 189 -162 82 -384 115 -581 86z m270 -10 c327 -40 609 -239
  756 -534 60 -122 85 -206 100 -341 19 -178 -9 -336 -91 -509 -109 -232 -292
  -402 -531 -495 -474 -183 -1014 33 -1229 492 -96 206 -120 453 -65 670 21 80
  90 226 145 309 145 215 423 381 685 408 116 12 131 12 230 0z"
                />
                <path
                  d="M2029 2631 c-89 -17 -201 -52 -259 -81 -71 -36 -79 -47 -13 -18 149
  66 406 96 506 59 18 -7 17 -9 -9 -19 -16 -7 -53 -35 -83 -62 -30 -28 -59 -50
  -64 -50 -20 0 3 27 62 72 34 26 58 48 52 48 -5 0 -41 -23 -78 -52 l-68 -52
  -100 -9 c-120 -11 -227 -9 -239 3 -5 6 25 26 75 51 103 50 57 42 -61 -11 -102
  -46 -199 -65 -264 -50 -52 11 -94 1 -171 -44 -65 -39 -50 -43 20 -6 37 20 71
  30 99 30 39 -1 36 -3 -61 -43 -112 -46 -152 -71 -59 -36 146 54 256 79 352 79
  51 0 96 -4 99 -10 3 -5 2 -10 -4 -10 -53 0 -311 -161 -385 -240 -62 -66 -75
  -95 -52 -118 15 -15 38 -17 179 -16 89 1 184 6 212 12 27 6 51 9 53 8 1 -2 -5
  -22 -13 -45 -13 -38 -20 -72 -41 -208 -4 -28 -9 -33 -32 -33 -23 0 -39 16
  -105 110 -76 107 -79 110 -116 110 -21 0 -73 3 -116 7 -52 4 -76 3 -72 -4 4
  -6 42 -13 86 -17 44 -3 91 -11 103 -16 17 -7 6 -9 -42 -5 -75 6 -57 -8 30 -23
  l55 -9 -85 -3 -85 -2 89 -14 c49 -7 91 -16 94 -19 3 -3 -39 -5 -94 -6 l-99 -1
  105 -14 c141 -19 151 -34 19 -28 -57 3 -112 7 -121 9 -10 2 -18 -1 -18 -6 0
  -5 12 -9 28 -9 52 0 226 -30 237 -41 7 -8 -3 -9 -35 -5 -89 12 -262 27 -266
  23 -2 -2 105 -22 237 -45 221 -38 244 -40 270 -27 38 20 39 20 39 -15 0 -24
  -7 -33 -40 -50 -21 -11 -50 -20 -63 -20 -25 0 -319 47 -352 57 -13 3 -17 2
  -10 -5 6 -5 96 -30 202 -56 154 -38 201 -46 240 -40 32 4 79 0 132 -11 l83
  -17 39 28 c48 33 99 100 132 174 23 54 26 57 114 97 49 23 124 51 166 63 71
  20 80 20 159 6 76 -13 86 -13 118 4 50 25 152 58 202 66 63 11 22 22 -78 23
  l-82 1 9 38 c14 62 11 168 -6 182 -22 18 -58 -9 -83 -62 -22 -45 -52 -149 -52
  -180 0 -16 -7 -17 -57 -12 -66 7 -121 -11 -283 -90 -52 -25 -94 -46 -95 -46 0
  0 0 60 0 133 0 158 -16 218 -72 268 -31 27 -42 30 -75 26 -52 -7 -97 -44 -147
  -118 -49 -74 -79 -163 -93 -284 -9 -71 -15 -94 -32 -107 -12 -10 -25 -18 -30
  -18 -13 0 1 147 23 233 22 83 56 157 108 232 l35 50 -47 -50 c-26 -27 -60 -73
  -76 -101 -27 -48 -33 -52 -76 -58 -59 -8 -276 -8 -297 0 -89 34 179 256 398
  330 150 51 266 41 471 -44 61 -24 146 -57 190 -72 l81 -27 37 43 c42 48 39 54
  -11 24 -31 -19 -36 -19 -95 -6 -35 8 -92 26 -128 40 l-64 25 102 -6 c99 -6
  103 -5 122 18 28 33 26 40 -16 81 -49 46 -93 68 -138 68 -49 0 -85 -21 -133
  -75 -32 -36 -46 -45 -61 -40 -30 9 -27 18 28 68 71 63 150 81 236 52 11 -3 2
  4 -20 16 -22 12 -62 28 -90 36 -61 17 -253 25 -316 14z m435 -124 c50 -28 64
  -50 47 -71 -14 -17 -58 -19 -146 -7 l-50 6 33 34 c29 30 37 33 72 28 43 -5 46
  7 5 17 -36 9 -90 -17 -111 -53 -10 -17 -24 -31 -32 -31 -19 0 0 31 43 69 43
  38 83 40 139 8z m-341 -268 c14 -6 35 -30 48 -53 46 -80 36 -303 -18 -411 -33
  -64 -106 -122 -142 -110 -55 17 -101 122 -101 230 1 123 52 269 116 324 37 33
  59 38 97 20z m643 -31 c-10 -39 -11 -40 -14 -15 -4 33 3 57 16 57 5 0 4 -19
  -2 -42z m-28 -39 c-3 -8 -7 -3 -11 10 -4 17 -3 21 5 13 5 -5 8 -16 6 -23z m52
  -18 c-1 -15 -19 -32 -31 -29 -8 2 -14 -1 -14 -7 0 -5 5 -9 10 -7 6 2 4 -3 -3
  -10 -11 -11 -15 -10 -23 5 -6 9 -14 15 -20 12 -5 -4 -9 1 -9 9 0 18 16 30 24
  17 3 -5 15 -7 26 -4 11 3 18 9 15 12 -2 4 2 8 10 8 8 0 15 -3 15 -6z m-60
  -101 c-15 -12 -20 -44 -8 -52 10 -6 9 -8 -4 -8 -18 0 -35 56 -25 82 3 7 6 0 6
  -17 1 -23 4 -26 11 -15 5 8 7 26 4 40 l-6 25 14 -25 c8 -14 11 -27 8 -30z m33
  0 c-7 -28 -13 -25 -13 6 0 14 4 23 9 20 5 -3 7 -15 4 -26z"
                />
                <path
                  d="M2067 2123 c3 -54 11 -104 17 -112 8 -12 8 -13 -2 -7 -7 4 -19 2 -27
  -4 -19 -16 -19 -31 0 -24 21 9 20 -42 -1 -54 -13 -7 -14 -11 -4 -17 8 -5 18
  -1 27 10 7 11 13 14 13 8 0 -7 -7 -19 -16 -28 -14 -14 -19 -14 -29 -3 -24 25
  -25 63 -3 104 18 34 20 49 14 118 -3 43 -8 81 -11 84 -14 15 -64 -66 -85 -138
  -8 -29 -7 -33 26 -52 42 -24 39 -36 -4 -14 -32 16 -42 13 -42 -16 0 -11 7 -18
  19 -18 11 0 23 -4 26 -10 3 -6 -5 -10 -19 -10 -13 0 -26 -5 -28 -11 -5 -16 9
  -160 17 -167 4 -4 18 7 32 23 l25 30 -24 -42 c-17 -32 -20 -45 -11 -54 9 -9
  16 -2 33 27 12 22 18 30 15 19 -4 -11 -9 -32 -12 -47 -5 -25 -3 -28 22 -28 16
  0 38 12 57 30 31 31 32 47 12 118 -6 21 12 -16 21 -43 6 -18 7 -19 16 -3 7 12
  5 27 -6 50 l-16 33 19 -24 19 -24 11 46 c7 25 12 57 12 70 0 23 -3 24 -45 19
  -39 -4 -45 -2 -45 14 0 15 2 16 9 5 14 -22 85 -1 89 27 4 26 0 27 -36 6 -23
  -14 -23 -12 6 14 32 29 33 30 22 78 -13 56 -46 114 -65 114 -10 0 -15 -19 -18
  -67 l-3 -68 -2 68 c-2 51 -5 67 -17 67 -12 0 -13 -16 -8 -97z m-32 -33 c5 -27
  3 -46 -5 -55 -15 -18 -20 -18 -43 -1 -18 14 -18 16 3 55 11 23 24 41 29 41 5
  0 12 -18 16 -40z m95 -34 c0 -13 -8 -30 -17 -37 -15 -13 -16 -11 -10 11 4 14
  7 31 7 38 0 6 5 12 10 12 6 0 10 -11 10 -24z m0 -120 c0 -11 -19 -15 -25 -6
  -3 5 1 10 9 10 9 0 16 -2 16 -4z m-134 -43 c-5 -21 -4 -24 4 -13 8 13 10 13
  10 -1 0 -9 -9 -27 -19 -40 l-19 -24 -11 28 c-14 35 -14 50 -1 42 6 -3 10 1 10
  10 0 10 -5 13 -12 9 -7 -4 -8 -3 -4 4 4 7 16 12 28 12 17 0 19 -4 14 -27z m84
  -62 c0 -16 -8 -35 -17 -42 -14 -12 -16 -12 -8 1 5 8 8 27 7 42 -1 15 2 28 8
  28 5 0 10 -13 10 -29z"
                />
                <path
                  d="M2560 2405 l-21 -22 74 -5 c100 -6 144 -29 180 -93 15 -27 25 -39 21
  -25 -16 63 -48 104 -94 121 -127 47 -137 48 -160 24z"
                />
                <path
                  d="M1788 2380 c-85 -32 -277 -170 -238 -170 32 0 132 34 137 47 3 8 14
  11 30 7 19 -5 25 -2 30 15 3 11 9 21 14 21 5 0 9 10 9 23 -1 21 -1 22 -15 3
  -17 -23 -20 -14 -4 15 14 26 29 15 29 -22 0 -34 1 -34 40 -14 34 18 49 60 29
  80 -12 11 -22 10 -61 -5z"
                />
                <path
                  d="M2450 2271 c0 -27 10 -31 53 -24 45 7 47 18 6 32 -45 16 -59 14 -59
  -8z"
                />
                <path
                  d="M2556 2232 c-2 -4 -10 -35 -17 -68 -12 -60 -13 -61 -56 -72 -48 -13
  -197 -81 -191 -88 2 -2 39 10 81 26 42 17 104 33 137 37 46 4 60 10 60 22 1
  14 25 90 45 134 6 14 2 17 -23 17 -17 0 -33 -3 -36 -8z"
                />
                <path
                  d="M347 2793 c-18 -29 -85 -252 -93 -307 -2 -17 -11 -70 -19 -119 -22
  -123 -22 -402 -1 -532 30 -183 74 -346 122 -452 92 -202 206 -397 262 -447 12
  -11 22 -22 22 -27 0 -20 204 -228 251 -256 16 -10 29 -20 29 -24 0 -4 32 -29
  71 -56 217 -147 432 -249 629 -298 119 -30 135 -33 205 -46 100 -18 425 -16
  555 4 155 23 382 85 396 109 5 8 1 9 -12 4 -63 -25 -185 -60 -294 -83 -116
  -25 -142 -27 -370 -28 -234 0 -251 1 -375 29 -174 38 -303 83 -461 162 -318
  156 -614 435 -787 740 -181 319 -256 627 -244 998 7 217 44 417 108 579 11 27
  18 52 15 54 -2 2 -6 1 -9 -4z"
                />
                <path
                  d="M1122 2733 c-24 -35 -44 -73 -38 -73 2 0 18 23 35 50 33 54 35 68 3
  23z"
                />
                <path
                  d="M1135 2644 c-9 -14 -14 -28 -12 -31 3 -3 13 9 22 26 19 38 14 41 -10
  5z"
                />
                <path
                  d="M1016 2530 c-22 -56 -19 -65 5 -11 11 24 18 46 15 48 -2 2 -11 -14
  -20 -37z"
                />
                <path d="M1086 2545 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z" />
                <path d="M1066 2495 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z" />
                <path
                  d="M986 2444 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3 2
  -8 -8 -11 -23z"
                />
                <path
                  d="M1046 2445 c-3 -9 -6 -22 -5 -28 0 -7 5 -1 10 12 5 13 8 26 5 28 -2
  2 -6 -3 -10 -12z"
                />
                <path d="M971 2384 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                <path d="M1031 2384 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                <path d="M962 2340 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
                <path d="M1021 2344 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                <path d="M952 2280 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z" />
                <path d="M1012 2290 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
                <path d="M1003 2215 c0 -27 2 -38 4 -22 2 15 2 37 0 50 -2 12 -4 0 -4 -28z" />
                <path d="M944 2105 c0 -77 2 -107 3 -67 2 40 2 103 0 140 -2 37 -3 4 -3 -73z" />
                <path d="M1003 1980 c0 -25 2 -35 4 -22 2 12 2 32 0 45 -2 12 -4 2 -4 -23z" />
                <path d="M953 1925 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" />
                <path d="M1012 1910 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
                <path d="M962 1860 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
                <path d="M1022 1860 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
                <path d="M971 1814 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                <path
                  d="M1031 1820 c0 -8 4 -24 9 -35 5 -13 9 -14 9 -5 0 8 -4 24 -9 35 -5
  13 -9 14 -9 5z"
                />
                <path
                  d="M981 1784 c-1 -15 30 -106 35 -101 2 2 -5 28 -15 58 -11 30 -20 49
  -20 43z"
                />
                <path
                  d="M1061 1728 c-1 -12 31 -89 35 -85 3 2 -4 24 -15 48 -11 24 -20 41
  -20 37z"
                />
                <path
                  d="M1020 1665 c0 -5 5 -17 10 -25 5 -8 10 -10 10 -5 0 6 -5 17 -10 25
  -5 8 -10 11 -10 5z"
                />
                <path
                  d="M1100 1629 c0 -9 51 -99 56 -99 2 0 -5 17 -15 38 -24 44 -41 69 -41
  61z"
                />
                <path d="M1046 1607 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z" />
                <path d="M1066 1567 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z" />
                <path
                  d="M1102 1499 c12 -22 28 -45 36 -51 7 -7 -1 12 -19 40 -38 62 -50 69
  -17 11z"
                />
                <path
                  d="M1223 1429 c15 -20 24 -39 22 -43 -3 -3 -3 -4 1 -2 3 2 28 -21 57
  -51 55 -58 187 -162 240 -189 45 -23 33 -14 -57 47 -78 52 -191 155 -255 234
  -30 36 -30 36 -8 4z"
                />
                <path
                  d="M1197 1371 c48 -64 154 -164 228 -215 44 -31 23 -12 -72 66 -34 28
  -82 74 -106 102 -85 97 -99 111 -50 47z"
                />
                <path
                  d="M966 1147 c-73 -45 -95 -126 -54 -199 22 -39 79 -78 113 -78 21 0 21
  66 -1 78 -12 7 -5 17 40 56 38 32 56 42 56 32 0 -12 10 -16 35 -16 41 0 43 8
  15 64 -26 53 -62 78 -119 83 -36 3 -55 -1 -85 -20z m120 3 c32 -12 87 -82 82
  -105 -3 -13 -6 -13 -32 0 -35 18 -56 19 -56 3 0 -7 -18 -30 -40 -52 -43 -42
  -48 -54 -25 -62 21 -9 19 -44 -3 -44 -18 0 -92 46 -92 58 -1 4 -5 27 -10 52
  -8 41 -6 49 23 92 23 34 41 50 67 57 48 12 53 12 86 1z"
                />
                <path
                  d="M979 1082 c-21 -19 -30 -34 -27 -47 4 -17 7 -15 17 12 12 30 62 60
  81 48 5 -3 11 -1 15 5 15 24 -56 9 -86 -18z"
                />
                <path
                  d="M1000 1045 c-24 -25 -40 -45 -34 -45 15 0 95 78 86 84 -5 3 -28 -15
  -52 -39z"
                />
                <path
                  d="M3027 1100 l-62 -59 107 -108 108 -108 76 76 76 76 -44 87 c-38 76
  -46 86 -57 72 -12 -14 -16 -14 -38 4 -16 12 -41 20 -65 20 -35 0 -47 -7 -101
  -60z m155 31 c13 -11 33 -19 43 -18 13 1 28 -15 52 -57 18 -32 33 -64 33 -70
  0 -17 -114 -126 -131 -126 -14 0 -189 166 -189 179 0 3 24 30 54 59 60 58 95
  66 138 33z"
                />
                <path
                  d="M3091 1076 c-28 -29 -31 -37 -22 -55 16 -29 37 -26 66 7 28 31 32 67
  9 76 -9 3 -17 6 -18 6 -1 0 -17 -15 -35 -34z m59 -4 c0 -10 -11 -29 -25 -42
  -24 -22 -27 -23 -42 -7 -16 15 -15 18 7 42 28 30 60 33 60 7z"
                />
                <path
                  d="M3177 1005 c-40 -35 -45 -60 -16 -78 12 -8 25 -3 53 19 30 23 36 35
  34 59 -4 41 -26 41 -71 0z m35 -48 c-30 -30 -33 -31 -49 -14 -17 17 -16 20 22
  53 39 35 40 35 49 14 8 -17 4 -27 -22 -53z"
                />
                <path
                  d="M2570 1108 c-36 -17 -96 -41 -135 -54 -38 -13 -63 -23 -54 -24 33 0
  259 90 259 104 0 7 7 10 -70 -26z"
                />
                <path
                  d="M1475 1120 c7 -11 101 -65 138 -79 18 -7 26 -7 22 -1 -3 6 -12 10
  -18 10 -7 0 -43 18 -80 40 -37 21 -65 35 -62 30z"
                />
                <path d="M1587 1119 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z" />
                <path
                  d="M1660 1085 c14 -8 30 -14 35 -14 6 0 -1 6 -15 14 -14 8 -29 14 -35
  14 -5 0 1 -6 15 -14z"
                />
                <path
                  d="M2620 1065 c-25 -13 -41 -24 -37 -25 11 0 87 39 87 45 0 7 0 7 -50
  -20z"
                />
                <path d="M1720 1060 c8 -5 22 -9 30 -9 10 0 8 3 -5 9 -27 12 -43 12 -25 0z" />
                <path d="M1780 1040 c8 -5 24 -10 34 -10 26 0 18 6 -19 14 -22 5 -26 4 -15 -4z" />
                <path
                  d="M1660 1020 c8 -5 20 -10 25 -10 6 0 3 5 -5 10 -8 5 -19 10 -25 10 -5
  0 -3 -5 5 -10z"
                />
                <path d="M1848 1023 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
                <path d="M2338 1023 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
                <path
                  d="M2520 1020 c-8 -5 -10 -10 -5 -10 6 0 17 5 25 10 8 5 11 10 5 10 -5
  0 -17 -5 -25 -10z"
                />
                <path d="M1893 1013 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
                <path d="M2288 1013 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
                <path d="M1963 1003 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" />
                <path d="M2203 1003 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" />
                <path d="M2053 993 c20 -2 54 -2 75 0 20 2 3 4 -38 4 -41 0 -58 -2 -37 -4z" />
                <path d="M1775 980 c11 -5 29 -8 40 -8 16 0 15 2 -5 8 -34 11 -60 11 -35 0z" />
                <path
                  d="M2395 980 c-13 -5 -14 -9 -5 -9 8 0 24 4 35 9 13 5 14 9 5 9 -8 0
  -24 -4 -35 -9z"
                />
                <path
                  d="M1865 960 c17 -4 41 -8 55 -8 22 0 22 1 -5 8 -16 4 -41 8 -55 8 -22
  0 -22 -1 5 -8z"
                />
                <path d="M2328 963 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
                <path d="M2273 953 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
                <path
                  d="M2833 948 c-29 -14 -29 -15 3 -72 15 -27 23 -51 18 -55 -5 -5 -28
  -11 -51 -15 -42 -6 -43 -5 -63 34 -23 45 -29 47 -60 22 l-22 -18 48 -90 c58
  -108 83 -134 124 -134 67 0 150 66 150 118 0 26 -105 223 -118 221 -4 0 -17
  -5 -29 -11z m44 -25 c4 -10 26 -51 50 -92 55 -97 47 -141 -31 -176 -76 -33
  -114 -23 -142 39 -8 17 -28 55 -45 84 -30 52 -32 82 -7 82 7 0 21 -14 30 -30
  21 -37 38 -44 81 -36 61 12 64 19 39 77 -17 41 -19 55 -9 61 19 12 27 10 34
  -9z"
                />
                <path
                  d="M2802 744 c-14 -11 -14 -14 1 -38 20 -30 36 -32 76 -12 41 21 54 41
  38 54 -17 14 -94 11 -115 -4z m106 -6 c-3 -7 -21 -22 -41 -33 -36 -20 -36 -20
  -51 0 -22 29 -20 33 17 38 66 8 79 7 75 -5z"
                />
                <path d="M2028 943 c39 -2 105 -2 145 0 39 1 7 3 -73 3 -80 0 -112 -2 -72 -3z" />
                <path
                  d="M1300 818 l-121 -102 23 -18 c29 -22 37 -22 60 -1 17 15 18 15 18
  -14 0 -25 6 -33 30 -43 17 -7 33 -11 35 -8 3 2 8 36 11 76 5 53 12 76 27 89
  20 18 20 17 13 -61 -4 -43 -10 -91 -13 -107 -4 -23 0 -30 27 -44 17 -9 33 -15
  35 -13 5 5 35 250 35 287 0 24 -7 34 -29 46 l-30 15 -121 -102z m153 67 c18
  -13 18 -18 2 -147 -9 -73 -19 -135 -21 -137 -2 -2 -11 -1 -20 3 -17 6 -17 11
  2 169 5 41 4 47 -13 47 -30 0 -50 -34 -59 -99 -9 -63 -26 -82 -32 -36 -4 33
  -26 42 -58 25 -20 -11 -27 -11 -37 -1 -9 10 -4 19 28 44 21 18 69 58 105 89
  36 32 70 58 75 58 6 -1 18 -7 28 -15z"
                />
                <path
                  d="M2488 793 c-13 -3 -16 -11 -12 -33 6 -27 3 -29 -36 -40 -50 -14 -70
  -8 -70 20 0 19 -4 21 -32 15 -18 -4 -35 -9 -37 -11 -2 -2 9 -59 25 -126 16
  -68 30 -116 32 -107 2 10 -4 46 -13 80 -15 56 -24 97 -27 118 -4 38 29 50 42
  15 10 -25 13 -26 58 -19 56 8 72 19 72 50 0 26 24 40 37 22 15 -21 66 -235 60
  -252 -9 -22 -31 -18 -42 8 -9 19 -17 22 -54 19 -61 -4 -82 -17 -77 -48 5 -24
  3 -26 -25 -22 -23 4 -29 1 -27 -11 2 -10 12 -15 23 -13 42 6 48 12 42 41 -6
  27 -4 29 31 36 20 3 44 8 53 11 12 3 19 -3 23 -21 4 -17 13 -25 29 -25 45 0
  47 9 21 120 -46 197 -41 188 -96 173z"
                />
                <path
                  d="M1715 747 c-22 -19 -31 -41 -49 -135 -13 -61 -21 -114 -18 -117 3 -3
  12 -5 21 -5 14 0 14 2 2 9 -13 8 -12 21 3 93 9 46 22 97 27 114 13 41 53 59
  114 50 60 -9 88 -44 83 -103 -4 -50 7 -58 15 -10 7 49 -16 95 -57 112 -53 22
  -110 19 -141 -8z"
                />
                <path
                  d="M1745 690 c-13 -42 1 -55 54 -52 57 4 71 22 41 52 -27 27 -86 27 -95
  0z m73 4 c13 -4 22 -14 22 -25 0 -16 -7 -19 -45 -17 -33 2 -45 7 -45 19 0 29
  20 35 68 23z"
                />
                <path
                  d="M2430 657 c-28 -10 -35 -17 -36 -40 -1 -24 -1 -24 3 -3 3 20 13 26
  51 35 45 9 61 4 62 -21 0 -7 -65 -28 -87 -28 -7 0 -13 -4 -13 -10 0 -13 3 -13
  61 6 45 15 50 19 47 43 -4 31 -33 37 -88 18z"
                />
                <path
                  d="M1890 592 c0 -7 -9 -12 -19 -12 -29 0 -32 -11 -16 -65 8 -27 13 -51
  10 -53 -13 -14 -54 23 -59 53 -4 18 -13 39 -21 45 -13 11 -20 8 -40 -16 -14
  -16 -25 -32 -25 -36 0 -5 -7 -8 -15 -8 -8 0 -15 -4 -15 -10 0 -20 19 -9 53 32
  l34 41 17 -51 c17 -51 30 -62 71 -62 l24 0 -20 57 c-23 69 -23 66 2 60 20 -5
  39 17 25 30 -3 4 -6 1 -6 -5z"
                />
              </g>
            </svg>
          </div>
        </section>
        {/* Sección de informacion */}
        <section className="informacion">
          <h2>Contacto</h2>
          <p>Direccion: Calle 9 No. 23-55.UDI</p>
          <p>Telefonos: +57 3107765803 | +57 3178882445 | +57 3160508859 |</p>
          <p>
            Correos: jmacias7@udi.edu.co | ksalamanca1@udi.edu.co |
            svalencia2@udi.edu.co
          </p>
        </section>
        {/* Sección del final */}
        <section className="final">
          <h2>Legal</h2>
          <li>
            <a href="#Terminos">Términos y condiciones</a>
          </li>
          <li>
            <a href="#Politica">Política de Privacidad</a>
          </li>
          <li>
            <a href="#FAQ">FAQ</a>
          </li>
          <p>Copyright © 2024 CarHub.Todos los derechos reservados.</p>
        </section>

        <div className="social-media">
          <a
            className="social-item"
            href="https://www.facebook.com/?locale=es_LA"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            className="social-item"
            href="https://twitter.com/?lang=es"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className="social-item"
            href="https://www.instagram.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className="social-item"
            href="https://www.discord.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </footer>
    </div>
  );
}
