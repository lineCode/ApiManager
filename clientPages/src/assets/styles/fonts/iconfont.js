;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M848.2028 624.638c61.7667 0 111.9928-50.2538 111.9928-111.9928 0-61.7667-50.2262-111.9949-111.9928-111.9949h-19.414016c-3.9373-11.1831-8.448-22.1194-13.4779-32.7014l13.6704-13.698c21.0811-21.0801 32.7025-49.2165 32.7025-79.1828 0-29.995-11.6214-58.1028-32.7025-79.1839-21.0801-21.1098-49.2165-32.7035-79.1839-32.7035-29.9704 0-58.1048 11.5937-79.1818 32.7035l-13.6704 13.6714c-10.6107-5.033-21.5214-9.5437-32.7311-13.481v-19.412992c0-61.7656-50.2292-111.9939-111.9949-111.9939-61.7636 0-111.9928 50.2282-111.9928 111.9939v19.412992c-11.2118 3.9373-22.1225 8.448-32.7322 13.481l-13.6714-13.6714c-21.077-21.1098-49.2124-32.7035-79.1828-32.7035-29.9663 0-58.0987 11.5937-79.1839 32.7035-21.076 21.0801-32.7014 49.1889-32.7014 79.1839 0 29.9674 11.6255 58.1028 32.7014 79.1828l13.6714 13.6704c-5.0289 10.6097-9.5406 21.5194-13.4779 32.7291h-19.414016c-61.7636 0-111.9928 50.2282-111.9928 111.9949 0 61.739 50.2292 111.9928 111.9928 111.9928h19.414016c3.9373 11.2118 8.449 22.1215 13.4779 32.7291l-13.6714 13.6714c-21.076 21.0811-32.7014 49.1909-32.7014 79.1849 0 29.996 11.6255 58.1028 32.7014 79.1828 21.0852 21.078 49.2175 32.7035 79.1839 32.7035 29.9715 0 58.1059-11.6255 79.1828-32.7035l13.6714-13.6704c10.6097 5.0309 21.5204 9.5119 32.7322 13.4789v19.416064c0 61.7359 50.2292 111.9928 111.9928 111.9928 61.7656 0 111.9949-50.2569 111.9949-111.9928v-19.416064c11.2097-3.967 22.1204-8.448 32.7311-13.5045l13.6704 13.695c21.077 21.078 49.2124 32.7035 79.1818 32.7035 29.9674 0 58.1038-11.6255 79.1839-32.7035 21.0811-21.0801 32.7025-49.1868 32.7025-79.1828 0-29.994-11.6214-58.1038-32.7025-79.1849l-13.6704-13.698c5.0299-10.6076 9.5406-21.5194 13.4779-32.7025H848.202752zM789.3873 710.6294c10.5277 10.5001 16.297 24.5555 16.297 39.594 0 15.0108-5.7692 29.0673-16.297 39.5909-21.0504 21.0278-58.1294 21.0278-79.1808 0l-43.1186-43.1452-18.4842 10.3629c-18.647 10.4172-38.826 18.7556-60.0177 24.7695l-20.3694 5.7723v61.057024c0 30.8675-25.1279 55.9933-55.9985 55.9933s-55.9985-25.1259-55.9985-55.9933v-61.057024l-20.3674-5.7723c-21.2183-6.0416-41.4259-14.3534-60.0156-24.7695l-18.4852-10.3363-43.1206 43.1176c-21.0534 21.0278-58.1294 21.0278-79.1828 0-10.5267-10.5236-16.2939-24.5801-16.2939-39.5909 0-15.0385 5.7672-29.0939 16.2939-39.594l43.1176-43.1165-10.3588-18.4852c-10.3916-18.5907-18.7054-38.7697-24.746-60.0412l-5.7733-20.3448h-61.053951999999995c-30.8695 0-55.9954-25.1279-55.9954-55.9964 0-30.8705 25.1249-55.9985 55.9954-55.9985h61.053951999999995l5.7733-20.3704c6.0406-21.2449 14.3544-41.4505 24.746-60.0156l10.3588-18.4832-43.1176-43.1186c-10.5267-10.5277-16.2939-24.5811-16.2939-39.5919 0-15.0395 5.7672-29.0939 16.2939-39.5919 21.0545-21.0278 58.1304-21.0278 79.1828 0l43.1206 43.1176 18.4852-10.3608c18.5897-10.3905 38.7983-18.731 60.0156-24.746l20.3674-5.7702v-61.056000000000004c0-30.8951 25.1279-55.9964 55.9985-55.9964s55.9985 25.1013 55.9985 55.9964v61.056000000000004l20.3694 5.7702c21.1917 6.016 41.3706 14.3278 60.0177 24.7716l18.4842 10.3352 43.1186-43.1176c21.0524-21.0278 58.1315-21.0278 79.1808 0 10.5277 10.498 16.297 24.5524 16.297 39.5919 0 15.0108-5.7692 29.0642-16.297 39.5919l-43.0909 43.1186 10.3076 18.4832c10.4479 18.6737 18.7832 38.8813 24.7706 60.0156l5.7733 20.3704h61.053951999999995c30.8695 0 55.9974 25.1279 55.9974 55.9985 0 30.8685-25.1279 55.9964-55.9974 55.9964h-61.053951999999995l-5.7733 20.3448c-5.9884 21.161-14.3227 41.342-24.7706 60.0412l-10.3076 18.4852L789.3873 710.6294zM512.2181 344.6528c-92.6372 0-167.9913 75.3551-167.9913 167.9923 0 92.6351 75.3541 167.9913 167.9913 167.9913s167.9913-75.3562 167.9913-167.9913C680.2094 420.0079 604.8553 344.6528 512.2181 344.6528zM512.2181 624.638c-61.7636 0-111.9928-50.2538-111.9928-111.9928 0-61.7667 50.2292-111.9949 111.9928-111.9949 61.7656 0 111.9949 50.2282 111.9949 111.9949C624.213 574.3841 573.9848 624.638 512.2181 624.638z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shijian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.259585 1024.473277c282.89219 0 512.259585-229.363092 512.259585-512.258151C1024.517737 229.32437 795.151776 0 512.259585 0S0 229.32437 0 512.215126C0 795.110185 229.367395 1024.473277 512.259585 1024.473277zM516.26093 152.076908c202.602846 0 366.854454 164.208583 366.854454 366.80856 0 202.684594-164.251608 366.851585-366.854454 366.851585-202.601412 0-366.851585-164.166992-366.851585-366.851585C149.409345 316.28549 313.659518 152.076908 516.26093 152.076908zM469.571406 597.591485l256.129076 0c23.593591 0 42.689613-19.09172 42.689613-42.603563 0-23.593591-19.094588-42.772796-42.689613-42.772796L512.259585 512.215126 512.259585 298.77423c0-23.510409-19.093154-42.688179-42.688179-42.688179-23.596459 0-42.688179 19.17777-42.688179 42.688179l0 256.213692C426.881793 578.501199 445.974947 597.591485 469.571406 597.591485z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shijian1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.700671 127.718847c-211.957911 0-383.778061 171.815157-383.778061 383.76336 0 211.95025 171.821174 383.76336 383.778061 383.76336 211.957911 0 383.780108-171.813111 383.780108-383.76336C895.480779 299.534004 723.658581 127.718847 511.700671 127.718847zM511.700671 860.359013c-192.690312 0-348.890077-156.209738-348.890077-348.875782 0-192.699814 156.199765-348.875782 348.890077-348.875782 192.691336 0 348.8911 156.176992 348.8911 348.875782C860.591771 704.147228 704.392006 860.359013 511.700671 860.359013zM703.591748 511.48323 529.145686 511.48323 529.145686 284.71346c0-9.641591-7.819403-17.443277-17.445016-17.443277-9.624589 0-17.443992 7.801686-17.443992 17.443277l0 244.213048c0 9.625218 7.819403 17.443277 17.443992 17.443277l191.891077 0c9.624589 0 17.445016-7.819083 17.445016-17.443277C721.033694 519.28594 713.216337 511.48323 703.591748 511.48323z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shijian2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998465 0.023536C229.227934 0.023536 0.004093 229.242078 0.004093 512c0 282.758945 229.224864 511.975441 511.994372 511.975441 282.769508 0 511.997442-229.216495 511.997442-511.975441C1023.995907 229.242078 794.767973 0.023536 511.998465 0.023536zM511.998465 977.433428c-257.066073 0-465.451475-208.398354-465.451475-465.432405 0-257.0801 208.385402-465.432405 465.451475-465.432405 257.066073 0 465.451475 208.354352 465.451475 465.432405C977.44994 769.033028 769.064538 977.433428 511.998465 977.433428zM767.997186 512.002047 535.269401 512.002047 535.269401 209.469756c0-12.861936-10.428941-23.271006-23.270936-23.271006-12.839949 0-23.272983 10.408047-23.272983 23.271006L488.725482 535.271006c0 12.841469 10.433034 23.27203 23.272983 23.27203l255.998721 0c12.839949 0 23.272983-10.43056 23.272983-23.27203C791.268122 522.411117 780.837135 512.002047 767.997186 512.002047z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zaixian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M212.48902 956.390159 92.609723 956.390159c-14.111392 0-25.550932-11.438517-25.550932-25.550932l0-204.098421c0-14.112416 11.43954-25.551956 25.550932-25.551956l119.879298 0c14.111392 0 25.550932 11.43954 25.550932 25.551956l0 204.098421C238.040976 944.951643 226.600413 956.390159 212.48902 956.390159zM118.161678 905.287271l68.77641 0L186.938088 752.290715l-68.77641 0L118.161678 905.287271z"  ></path>' +
    '' +
    '<path d="M452.250686 956.390159 332.355015 956.390159c-14.111392 0-25.550932-11.438517-25.550932-25.550932L306.804083 540.189016c0-14.111392 11.43954-25.550932 25.550932-25.550932l119.895671 0c14.112416 0 25.550932 11.43954 25.550932 25.550932l0 390.650211C477.801619 944.951643 466.363102 956.390159 452.250686 956.390159zM357.906971 905.287271l68.790736 0L426.697707 565.739948l-68.790736 0L357.906971 905.287271z"  ></path>' +
    '' +
    '<path d="M692.023608 956.390159 572.13203 956.390159c-14.111392 0-25.550932-11.438517-25.550932-25.550932L546.581098 354.933755c0-14.112416 11.43954-25.550932 25.550932-25.550932l119.891578 0c14.112416 0 25.552979 11.43954 25.552979 25.550932l0 575.905472C717.575564 944.951643 706.136024 956.390159 692.023608 956.390159zM597.68194 905.287271l68.790736 0 0-524.802584-68.790736 0L597.68194 905.287271z"  ></path>' +
    '' +
    '<path d="M931.78425 956.390159l-119.890554 0c-14.111392 0-25.551956-11.438517-25.551956-25.550932L786.34174 93.730755c0-14.112416 11.440563-25.551956 25.551956-25.551956l119.890554 0c14.111392 0 25.550932 11.43954 25.550932 25.551956l0 837.107449C957.335183 944.951643 945.896666 956.390159 931.78425 956.390159zM837.445652 905.287271l68.787666 0L906.233318 119.281687l-68.787666 0L837.445652 905.287271z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lixian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M514.327273 651.636364c-51.2 0-97.745455 18.618182-132.654545 48.872727-13.963636 11.636364-32.581818 11.636364-46.545455 0-16.290909-13.963636-13.963636-39.563636 2.327273-53.527273 32.581818-27.927273 72.145455-46.545455 116.363636-58.181818L514.327273 651.636364C514.327273 651.636364 514.327273 651.636364 514.327273 651.636364zM307.2 444.509091c-41.890909 20.945455-79.127273 46.545455-114.036364 79.127273-13.963636 13.963636-13.963636 37.236364 0 51.2 13.963636 11.636364 34.909091 11.636364 46.545455 0 34.909091-32.581818 74.472727-58.181818 118.690909-76.8L307.2 444.509091zM153.6 290.909091c-41.890909 25.6-81.454545 58.181818-116.363636 93.090909-13.963636 13.963636-13.963636 37.236364 0 51.2l0 0c13.963636 11.636364 34.909091 11.636364 46.545455 0 34.909091-34.909091 74.472727-67.490909 118.690909-93.090909L153.6 290.909091zM989.090909 384C868.072727 260.654545 700.509091 186.181818 514.327273 186.181818c-69.818182 0-139.636364 11.636364-202.472727 30.254545l55.854545 55.854545c46.545455-11.636364 95.418182-18.618182 146.618182-18.618182 167.563636 0 318.836364 67.490909 428.218182 176.872727 13.963636 13.963636 34.909091 13.963636 46.545455 0C1003.054545 421.236364 1005.381818 397.963636 989.090909 384zM514.327273 395.636364c-6.981818 0-16.290909 0-23.272727 0l72.145455 72.145455c86.109091 11.636364 162.909091 48.872727 223.418182 104.727273 13.963636 11.636364 32.581818 11.636364 46.545455 0 16.290909-13.963636 16.290909-37.236364 0-51.2C749.381818 444.509091 637.672727 395.636364 514.327273 395.636364zM514.327273 791.272727c-39.563636 0-69.818182 30.254545-69.818182 69.818182s30.254545 69.818182 69.818182 69.818182 69.818182-30.254545 69.818182-69.818182S551.563636 791.272727 514.327273 791.272727zM705.163636 677.236364l-65.163636-65.163636L493.381818 465.454545l-62.836364-62.836364-114.036364-114.036364-53.527273-53.527273L223.418182 195.490909C209.454545 183.854545 188.509091 183.854545 174.545455 195.490909l0 0C160.581818 209.454545 160.581818 232.727273 174.545455 246.690909l20.945455 20.945455 0 0 51.2 51.2 0 0 139.636364 139.636364 23.272727 23.272727 0 0 276.945455 276.945455c13.963636 13.963636 34.909091 13.963636 48.872727 0 13.963636-13.963636 13.963636-34.909091 0-48.872727L705.163636 677.236364z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-new-document" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M846.4 547.2v-356.8c0-44.8-35.2-80-80-80h-560c-44.8 0-80 35.2-80 80v640c0 44.8 35.2 80 80 80h396.8c3.2 0 4.8 0 6.4-1.6 33.6 22.4 75.2 36.8 120 36.8 118.4-1.6 214.4-97.6 214.4-217.6 0-75.2-38.4-140.8-97.6-180.8zM814.4 190.4v137.6l-185.6-185.6h137.6c27.2 0 48 22.4 48 48zM606.4 164.8l185.6 187.2h-137.6c-27.2 0-48-20.8-48-48v-139.2zM158.4 830.4v-640c0-27.2 20.8-48 48-48h368v136h-310.4c-9.6 0-16 6.4-16 16s6.4 16 16 16h310.4c3.2 40 38.4 72 80 72h160v147.2c-25.6-11.2-54.4-17.6-86.4-17.6-118.4 0-216 97.6-216 216 0 57.6 22.4 110.4 60.8 148.8h-366.4c-27.2 1.6-48-20.8-48-46.4zM728 912c-100.8 0-184-81.6-184-184s83.2-184 184-184 184 83.2 184 184-81.6 184-184 184z"  ></path>' +
    '' +
    '<path d="M832 712h-88v-88c0-9.6-6.4-16-16-16s-16 6.4-16 16v88h-88c-9.6 0-16 6.4-16 16s6.4 16 16 16h88v88c0 9.6 6.4 16 16 16s16-6.4 16-16v-88h88c9.6 0 16-6.4 16-16s-6.4-16-16-16zM539.2 444.8c0-9.6-6.4-16-16-16h-259.2c-9.6 0-16 6.4-16 16s6.4 16 16 16h257.6c9.6 0 17.6-8 17.6-16z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shijianchuofuwu-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M680.864 119.712v-57.141h-32v57.131h-296.533v-57.131h-32v57.131h-191.701v791.648h766.421v-791.637zM160.63 453.696h71.093v-32h-71.093v-269.984h159.701v152.288h32v-152.288h296.533v152.288h32v-152.288h182.187v350.613c-46.279-96.226-143.004-161.465-254.965-161.465-77.003 0-146.798 30.859-197.694 80.885l-67.287-0.039v32h39.253c-35.055 46.513-56.144 105.274-56.144 168.959 0 113.262 66.701 210.946 162.964 255.914l-328.548 0.727zM431.286 446.048c45.225-45.226 107.703-73.199 176.715-73.199 138.021 0 249.909 111.888 249.909 249.909 0 138.021-111.888 249.909-249.909 249.909-138.019 0-249.907-111.886-249.909-249.905-0.001-0.204-0.001-0.445-0.001-0.685 0-68.796 27.982-131.055 73.185-176.019zM725.078 879.35c71.154-33.245 125.264-92.993 150.313-166.22l-12.339 166.22z" fill="#707070" ></path>' +
    '' +
    '<path d="M811.030 639.83v-32h-190.229v-190.229h-32v222.229h222.229zM250.304 421.696h70.869v32h-70.869z" fill="#707070" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chakanwendangjilu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M947.2 537.6c-12.8 0-25.6-12.8-25.6-25.6V134.4c0-44.8-32-76.8-76.8-76.8H153.6c-44.8 0-76.8 32-76.8 76.8V896c0 44.8 32 76.8 76.8 76.8h403.2c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6H153.6c-70.4 0-121.6-57.6-121.6-121.6v-768C32 64 89.6 12.8 153.6 12.8h691.2c70.4 0 121.6 57.6 121.6 121.6V512c0 19.2-6.4 25.6-19.2 25.6z"  ></path>' +
    '' +
    '<path d="M844.8 544c0 83.2-32 153.6-76.8 211.2l211.2 211.2c25.6 25.6 6.4 64-32 25.6-19.2-25.6-204.8-204.8-204.8-204.8-57.6 51.2-140.8 83.2-224 83.2-179.2 6.4-326.4-140.8-326.4-326.4 0-179.2 147.2-326.4 326.4-326.4s326.4 147.2 326.4 326.4zM518.4 256C358.4 256 230.4 384 230.4 544s128 294.4 288 294.4 294.4-128 294.4-294.4C812.8 384 678.4 256 518.4 256zM876.8 179.2H147.2c-12.8 0-19.2-12.8-19.2-19.2 0-12.8 6.4-19.2 19.2-19.2h729.6c12.8 0 19.2 6.4 19.2 19.2-6.4 6.4-12.8 19.2-19.2 19.2z"  ></path>' +
    '' +
    '<path d="M249.6 403.2H147.2c-12.8 0-19.2-6.4-19.2-19.2 0-12.8 6.4-19.2 19.2-19.2h102.4c12.8 0 19.2 6.4 19.2 19.2 0 12.8-6.4 19.2-19.2 19.2zM204.8 614.4h-57.6c-12.8 0-19.2-6.4-19.2-19.2 0-12.8 6.4-19.2 19.2-19.2h57.6c12.8 0 19.2 6.4 19.2 19.2 0 12.8-6.4 19.2-19.2 19.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)