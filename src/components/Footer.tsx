import Box from "@mui/material/Box";
import { Container, Link, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <footer>
      <Box
        sx={{ maxHeight: "42rem" }}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="lightslategray"
        color="white"
      >
        <Container maxWidth="lg">
          <Link href="https://www.vermietet.de">
            <svg
              width="200"
              height="50"
              viewBox="0 -4 144 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.419 22.8522L61.3937 22.2496H60.5278V27.7184H61.4595V23.7333C61.6603 23.2242 62.1698 22.9058 62.7153 22.9484C63.0398 22.9067 63.3651 23.0196 63.594 23.2534C63.8228 23.4872 63.9287 23.8149 63.88 24.1384V27.7184H64.8218V24.0979C64.8404 23.7788 64.982 23.4793 65.2168 23.2624C65.4519 23.0485 65.7598 22.9325 66.0776 22.9383C66.4046 22.9041 66.7306 23.011 66.9739 23.232C67.1709 23.4795 67.2668 23.7926 67.2423 24.108V27.7083H68.1436V24.0523C68.1233 22.783 67.5157 22.1484 66.3207 22.1484C65.9679 22.142 65.6194 22.2257 65.3079 22.3914C65.0248 22.5432 64.7818 22.7602 64.599 23.0244C64.3138 22.4347 63.6914 22.0851 63.0394 22.1484C62.42 22.1227 61.823 22.382 61.419 22.8522ZM70.3412 22.8522L70.3159 22.2496H69.4551V27.7083H70.3868V23.7232C70.5889 23.2152 71.0974 22.8974 71.6426 22.9383C71.9679 22.8948 72.2947 23.0069 72.5248 23.241C72.7549 23.475 72.8614 23.8037 72.8123 24.1283V27.7083H73.7288V24.0877C73.7466 23.7674 73.8904 23.467 74.1288 23.2522C74.3649 23.0411 74.6731 22.9287 74.9897 22.9383C75.3166 22.9041 75.6426 23.011 75.8859 23.232C76.0853 23.4783 76.1815 23.7923 76.1543 24.108V27.7083H77.0911V24.0523C77.0708 22.7813 76.4581 22.1484 75.2631 22.1484C74.5709 22.1233 73.9138 22.4537 73.5212 23.0244C73.2371 22.4336 72.6139 22.0836 71.9616 22.1484C71.3422 22.1227 70.7452 22.382 70.3412 22.8522ZM78.4431 23.5054C78.2251 23.9548 78.1158 24.4492 78.1241 24.9486V25.0093C78.0952 25.7464 78.3406 26.468 78.8127 27.0348C79.2695 27.5463 79.93 27.8283 80.6154 27.8045C81.074 27.8137 81.526 27.6907 81.917 27.45C82.298 27.2129 82.603 26.8698 82.793 26.4626C83.001 26.0159 83.105 25.5275 83.097 25.0346V24.9688C83.135 24.2212 82.889 23.4869 82.408 22.913C81.95 22.4026 81.29 22.1208 80.6053 22.1433C80.1521 22.1355 79.706 22.2566 79.3191 22.4927C78.9337 22.7366 78.6289 23.0889 78.4431 23.5054ZM79.4862 26.5183C79.1872 26.0927 79.0393 25.5794 79.0659 25.06C79.0316 24.5049 79.1791 23.9539 79.4862 23.4902C79.7546 23.1411 80.1699 22.9364 80.6103 22.9364C81.051 22.9364 81.466 23.1411 81.734 23.4902C82.035 23.9154 82.187 24.4282 82.165 24.9486C82.199 25.5004 82.051 26.0481 81.745 26.5082C81.485 26.8713 81.061 27.0804 80.6154 27.0652C80.1721 27.0791 79.7501 26.8748 79.4862 26.5183ZM84.93 23.5713C85.461 23.9966 86.08 24.2976 86.742 24.4523C87.235 24.5659 87.704 24.7629 88.13 25.0346C88.383 25.2365 88.524 25.547 88.51 25.8702C88.523 26.2058 88.37 26.5263 88.099 26.7259C87.753 26.9565 87.34 27.0668 86.925 27.0399C86.456 27.0634 85.993 26.9259 85.613 26.65C85.284 26.4041 85.095 26.0128 85.107 25.6018H84.13C84.126 26.0107 84.25 26.4106 84.484 26.7462C84.745 27.0969 85.094 27.3714 85.497 27.5412C85.942 27.7347 86.424 27.833 86.91 27.8298C87.573 27.865 88.23 27.676 88.773 27.293C89.227 26.9591 89.488 26.4235 89.472 25.86C89.479 25.5188 89.391 25.1822 89.219 24.8878C89.026 24.5882 88.764 24.3397 88.454 24.1637C88.002 23.9143 87.521 23.7237 87.021 23.5966C86.556 23.4912 86.116 23.2969 85.725 23.0244C85.481 22.848 85.338 22.5652 85.34 22.2648C85.325 21.9245 85.476 21.5981 85.745 21.3888C86.46 20.9469 87.37 20.9728 88.059 21.4546C88.346 21.7276 88.5 22.1123 88.479 22.5079H89.457C89.458 22.1076 89.344 21.7154 89.127 21.3787C88.903 21.0301 88.585 20.7512 88.211 20.5736C87.789 20.371 87.326 20.2704 86.859 20.2799C86.21 20.2522 85.572 20.4529 85.056 20.847C84.611 21.1902 84.354 21.7232 84.362 22.2851C84.353 22.7765 84.56 23.2472 84.93 23.5713ZM93.462 26.7664C93.216 26.966 92.907 27.0719 92.591 27.0652C92.16 27.0891 91.745 26.9022 91.477 26.5639C91.194 26.1342 91.059 25.624 91.092 25.1106V24.9334C91.056 24.4095 91.193 23.8883 91.482 23.4497C91.745 23.1105 92.157 22.9213 92.586 22.9434C92.917 22.9368 93.237 23.0604 93.477 23.2877C93.715 23.5153 93.858 23.8247 93.877 24.1536H94.753C94.744 23.6084 94.509 23.0914 94.105 22.7256C93.687 22.3567 93.143 22.1612 92.586 22.1787C92.13 22.1651 91.679 22.2848 91.29 22.5231C90.921 22.7548 90.629 23.0893 90.449 23.4852C90.248 23.9305 90.148 24.4146 90.155 24.903V25.06C90.118 25.7931 90.352 26.5143 90.814 27.0854C91.265 27.5865 91.917 27.8596 92.591 27.8298C92.956 27.8301 93.315 27.7433 93.639 27.5766C93.956 27.4219 94.229 27.1904 94.434 26.9031C94.628 26.6426 94.74 26.3309 94.758 26.0069H93.877C93.85 26.3066 93.699 26.5815 93.462 26.7664ZM95.999 23.5054C95.785 23.956 95.677 24.4498 95.685 24.9486V25.0346C95.654 25.772 95.9 26.4943 96.374 27.0601C96.829 27.5708 97.487 27.8529 98.171 27.8298C98.632 27.8391 99.085 27.7161 99.478 27.4753C99.859 27.2395 100.162 26.8959 100.348 26.4879C100.561 26.0424 100.667 25.5535 100.657 25.06V24.9941C100.693 24.2469 100.447 23.5134 99.969 22.9383C99.51 22.4266 98.848 22.1446 98.161 22.1686C97.24 22.1483 96.392 22.6721 95.999 23.5054ZM97.047 26.5183C96.747 26.0932 96.597 25.5799 96.622 25.06H96.611C96.581 24.5047 96.734 23.9549 97.047 23.4953C97.306 23.1407 97.722 22.9347 98.161 22.9434C98.608 22.9318 99.031 23.1399 99.295 23.5004C99.595 23.926 99.744 24.4389 99.721 24.9587C99.756 25.5099 99.61 26.0576 99.305 26.5183C99.034 26.8659 98.617 27.069 98.176 27.069C97.735 27.069 97.319 26.8659 97.047 26.5183ZM103.453 27.8298C104.056 27.8719 104.646 27.6349 105.053 27.1867L105.078 27.7083H105.964V22.2496H105.032V26.2499C104.779 26.7947 104.206 27.1168 103.609 27.05C102.931 27.05 102.597 26.6348 102.597 25.8043V22.2598H101.66V25.8043C101.62 26.3511 101.786 26.8931 102.126 27.3234C102.472 27.6793 102.957 27.8645 103.453 27.8298ZM108.82 22.2496V20.9483L107.888 20.928V22.2496H106.876V22.9839H107.888V26.3715C107.864 26.755 107.975 27.1347 108.202 27.445C108.443 27.7104 108.792 27.8505 109.149 27.8247C109.391 27.8227 109.631 27.7886 109.863 27.7235V26.974C109.719 27.0089 109.571 27.0293 109.423 27.0348C109.25 27.0534 109.078 26.9918 108.957 26.8677C108.852 26.7205 108.804 26.541 108.82 26.3613V22.9687H109.833V22.2496H108.82ZM111.038 27.7285H115.853V26.9943H112.152L114.117 24.8574C115.038 23.8616 115.499 23.0007 115.499 22.275C115.522 21.7334 115.305 21.2093 114.907 20.8419C114.453 20.4662 113.874 20.2746 113.286 20.3052C112.643 20.2729 112.014 20.4989 111.539 20.9331C111.098 21.3621 110.86 21.9588 110.886 22.5737H111.818C111.794 22.1691 111.932 21.7717 112.203 21.4698C112.493 21.1938 112.886 21.0508 113.286 21.0749C113.633 21.0598 113.969 21.1922 114.213 21.4394C114.449 21.6967 114.575 22.037 114.562 22.3864C114.561 22.6765 114.488 22.9617 114.35 23.2168C114.124 23.5792 113.862 23.9185 113.57 24.2295L111.038 27.0601V27.7285ZM121.742 25.2878H120.73L120.75 20.4065H119.737L116.446 25.5005V26.0474H119.793V27.7538H120.73V26.0474H121.742V25.2878ZM119.793 25.2878H117.504L119.682 21.8851L119.793 21.6825V25.2878ZM59.0543 27.7285H58.0872V20.3811H59.0543V27.7285ZM43.5139 23.5054C43.2999 23.956 43.1925 24.4498 43.2 24.9486V25.0347C43.1692 25.772 43.4148 26.4943 43.8886 27.0601C44.3438 27.5709 45.0025 27.8529 45.6862 27.8298C46.1467 27.8392 46.6001 27.7161 46.9927 27.4753C47.3742 27.2395 47.6773 26.8959 47.8636 26.4879C48.0736 26.0415 48.1792 25.5532 48.1725 25.06V24.9942C48.2086 24.2459 47.9608 23.5117 47.4788 22.9383C47.0224 22.4262 46.3616 22.144 45.6761 22.1686C44.7547 22.1483 43.9075 22.6721 43.5139 23.5054ZM44.557 26.5183C44.2605 26.0916 44.1128 25.5791 44.1367 25.06C44.1009 24.5025 44.2505 23.9488 44.5621 23.4852C44.8212 23.1306 45.237 22.9246 45.6761 22.9332C46.1226 22.9217 46.5465 23.1298 46.8104 23.4902C47.1097 23.9158 47.2593 24.4288 47.2357 24.9486C47.2697 25.5004 47.122 26.0481 46.8154 26.5082C46.5567 26.872 46.1324 27.0813 45.6862 27.0652C45.2431 27.0783 44.8215 26.8741 44.557 26.5183ZM50.1119 22.9332L50.0815 22.2496H49.1953V27.7083H50.1321V23.8194C50.2517 23.5646 50.4348 23.3449 50.6638 23.1814C50.898 23.0175 51.1781 22.9324 51.4639 22.9383C51.7664 22.9142 52.0654 23.0169 52.2892 23.2219C52.4828 23.4713 52.5782 23.7829 52.5576 24.0979V27.7083H53.4893V24.1029C53.4792 22.7965 52.8969 22.1484 51.7424 22.1484C51.1045 22.1335 50.4981 22.4253 50.1119 22.9332ZM41.7163 22.2699L40.3643 26.4626L38.9769 22.2496H38.0249L39.9997 27.7285H40.7137L42.6683 22.2699H41.7163Z"
                fill="#333333"
              />
              <path
                d="M27.5483 11.9199C27.2528 11.5441 26.9009 11.2161 26.5052 10.9477L26.4596 10.9123L20.6921 7.17529L18.3122 5.65619L16.2513 7.68159L11.456 12.4162L10.5648 13.3074C9.33309 14.3674 8.60959 15.9007 8.57479 17.5254V26.0121L4.05289 23.0752L3.66809 22.7714C3.47059 22.6144 3.09589 22.3207 3.04529 22.265C2.91499 22.0781 2.82059 21.8686 2.76679 21.6472L2.70089 11.849C2.70509 11.6517 2.72709 11.4551 2.76679 11.2617C2.87739 10.7808 3.10919 10.3363 3.44019 9.97039L9.51659 3.89399C9.55479 3.85759 9.59539 3.82369 9.63809 3.79279C9.78709 3.69029 9.9637 3.63549 10.1445 3.63579C10.226 3.63549 10.3068 3.65099 10.3825 3.68139L13.6486 5.80299L15.593 3.86869L11.9978 1.53439C11.4445 1.15889 10.7876 0.965891 10.1192 0.982391C9.39629 0.978591 8.68959 1.19599 8.09369 1.60519C8.00739 1.66269 7.92449 1.72529 7.84559 1.79259L7.73929 1.85839L1.57679 8.01579C0.530594 9.07399 -0.038205 10.5135 0.00199496 12.001V13.6669V20.2497V21.2624C0.026795 22.1567 0.304193 23.0257 0.802093 23.7689C1.09389 24.2001 1.45689 24.5785 1.87549 24.888C2.05779 25.0279 2.25079 25.1532 2.45279 25.2627L11.2686 30.9796V17.4798C11.2754 17.31 11.294 17.1408 11.3243 16.9735C11.4322 16.5438 11.6385 16.1451 11.9269 15.8088L18.6565 9.08429L25.0114 13.2061C25.1668 13.313 25.3051 13.4427 25.4216 13.5909C25.6425 13.8708 25.7841 14.2048 25.8317 14.5581V23.2625L20.6111 19.8749C20.4611 19.7565 20.3311 19.6145 20.2263 19.4547C20.0628 19.2182 19.9539 18.9484 19.9073 18.6647L19.8769 12.2592L17.1729 14.9632V18.447C17.2011 19.3501 17.4818 20.2271 17.9831 20.9788C18.1868 21.2833 18.4265 21.5622 18.697 21.8093L19.1629 22.1789L28.5408 28.2553V14.3758C28.4416 13.4816 28.0983 12.632 27.5483 11.9199Z"
                fill="#0077FF"
              />
              <path
                d="M46.8664 1.0737L40.1266 16.8319L33.3818 1.0737H36.258L40.2279 10.958L44.0307 1.0737H46.8664Z"
                fill="#0077FF"
              />
              <path
                d="M52.2437 13.6872L53.297 15.4038C52.8205 15.6955 52.3104 15.9284 51.7779 16.0975C51.2764 16.2642 50.7518 16.3513 50.2233 16.3558C49.3161 16.379 48.4175 16.1735 47.6105 15.7582C46.897 15.3817 46.3079 14.8066 45.9142 14.1024C45.5113 13.3604 45.3088 12.5262 45.3268 11.682C45.3191 10.8507 45.5474 10.0342 45.9851 9.3274C46.4256 8.6101 47.0473 8.0215 47.7877 7.6209C48.5462 7.1991 49.4011 6.9811 50.2689 6.988C51.3506 6.9525 52.4061 7.3248 53.2261 8.0311C54.0573 8.8156 54.6086 9.8507 54.7958 10.9781L48.0561 13.2568C48.2856 13.6098 48.6056 13.8949 48.9828 14.0822C49.3831 14.2774 49.8236 14.3762 50.2689 14.3708C50.9819 14.352 51.6717 14.1133 52.2437 13.6872ZM48.3042 9.5907C47.8253 10.1379 47.5767 10.8492 47.6105 11.5757C47.6007 11.6919 47.6007 11.8088 47.6105 11.9251L52.2032 10.2895C52.0311 9.8785 51.7597 9.5166 51.4133 9.2362C51.0266 8.9491 50.5526 8.8042 50.0714 8.8261C49.3987 8.8094 48.7526 9.089 48.3042 9.5907ZM59.6013 8.1476C59.9952 7.7972 60.4388 7.5071 60.9178 7.2867C61.2686 7.1124 61.6509 7.0108 62.0419 6.988L61.9407 9.3071C61.3537 9.2411 60.7608 9.3597 60.2443 9.6464C59.7588 9.9193 59.3577 10.3205 59.0848 10.806C58.8144 11.2812 58.673 11.8188 58.6746 12.3656V16.1279H56.3554V7.3829H58.4467L58.6088 9.4084C58.8539 8.9272 59.1911 8.4989 59.6013 8.1476ZM77.0861 7.7121C77.5972 8.213 77.8824 8.9004 77.8761 9.616V16.1279H75.5822V10.5022C75.5806 10.1195 75.4737 9.7446 75.2733 9.4185C75.0573 9.1475 74.7287 8.9907 74.3821 8.9932C73.6749 8.9887 73.0165 9.3534 72.6453 9.9553C72.1981 10.6178 71.96 11.3992 71.9617 12.1985V16.1279H69.6273V10.5022C69.6216 10.1218 69.5112 9.7504 69.3083 9.4287C69.0848 9.149 68.7447 8.9883 68.3867 8.9932C67.9313 8.988 67.4898 9.1501 67.1461 9.4489C66.7722 9.7733 66.485 10.1857 66.3106 10.649C66.1087 11.1406 66.0054 11.6671 66.0068 12.1985V16.1279H63.6978V7.3829H65.784L65.9713 8.902C66.2769 8.3088 66.7438 7.8138 67.3183 7.4741C67.9072 7.1335 68.5774 6.9585 69.2577 6.9677C69.8812 6.9466 70.4973 7.1086 71.0299 7.4336C71.5034 7.7389 71.8394 8.2165 71.9667 8.7653C72.3068 8.2296 72.7704 7.7833 73.3187 7.464C73.8381 7.1548 74.4309 6.9904 75.0353 6.988C75.7882 6.9455 76.5268 7.2063 77.0861 7.7121ZM80.656 3.3827C80.9075 3.1481 81.239 3.0178 81.583 3.0181C81.919 3.0191 82.242 3.1497 82.484 3.3827C82.741 3.6001 82.889 3.9196 82.889 4.2561C82.889 4.5927 82.741 4.9122 82.484 5.1296C82.238 5.3544 81.916 5.4791 81.583 5.479C81.241 5.48 80.9116 5.3557 80.656 5.1296C80.3925 4.9162 80.2394 4.5952 80.2394 4.2561C80.2394 3.9171 80.3925 3.5961 80.656 3.3827ZM82.681 7.3829V16.1279H80.3623V7.3829H82.681ZM91.305 13.6872L92.358 15.4038C91.882 15.6955 91.372 15.9284 90.839 16.0975C90.339 16.2637 89.816 16.3508 89.29 16.3558C88.381 16.3794 87.48 16.1739 86.672 15.7582C85.958 15.3817 85.369 14.8066 84.975 14.1024C84.575 13.3596 84.372 12.5259 84.388 11.682C84.379 10.8499 84.61 10.0328 85.051 9.3274C85.49 8.6103 86.11 8.0216 86.849 7.6209C87.607 7.1991 88.462 6.9811 89.33 6.988C90.412 6.9515 91.468 7.3239 92.287 8.0311C93.118 8.8156 93.67 9.8507 93.857 10.9781L87.117 13.2568C87.347 13.6112 87.669 13.8964 88.049 14.0822C88.447 14.2778 88.886 14.3767 89.33 14.3708C90.043 14.352 90.733 14.1133 91.305 13.6872ZM87.365 9.5907C86.889 10.1393 86.64 10.8496 86.672 11.5757C86.662 11.6919 86.662 11.8088 86.672 11.9251L91.264 10.2895C91.094 9.8788 90.824 9.5169 90.479 9.2362C90.09 8.9498 89.615 8.8051 89.133 8.8261C88.46 8.8094 87.814 9.089 87.365 9.5907Z"
                fill="#0077FF"
              />
              <path
                d="M98.581 3.51419V7.36249H100.855V9.18039H98.581V16.1075H96.267V9.20069H94.748V7.38279H96.267V3.51419H98.581Z"
                fill="#0077FF"
              />
              <path
                d="M108.592 13.687L109.645 15.4036C109.169 15.6953 108.659 15.9282 108.126 16.0973C107.626 16.2635 107.104 16.3506 106.577 16.3556C105.668 16.3792 104.768 16.1738 103.959 15.7581C103.245 15.3815 102.656 14.8064 102.263 14.1023C101.862 13.3594 101.66 12.5257 101.675 11.6818C101.667 10.8505 101.896 10.034 102.333 9.3272C102.774 8.6099 103.396 8.0213 104.136 7.6208C104.895 7.199 105.749 6.9809 106.617 6.9878C107.699 6.9513 108.755 7.3237 109.574 8.0309C110.406 8.8154 110.957 9.8505 111.144 10.978L104.404 13.2566C104.635 13.611 104.957 13.8963 105.336 14.082C105.735 14.2777 106.174 14.3766 106.617 14.3706C107.33 14.3519 108.02 14.1131 108.592 13.687ZM104.653 9.5905C104.176 10.1391 103.928 10.8495 103.959 11.5755C103.949 11.6917 103.949 11.8086 103.959 11.9249L108.552 10.2893C108.379 9.8797 108.11 9.5182 107.767 9.2361C107.378 8.9496 106.902 8.8049 106.42 8.8259C105.747 8.8092 105.101 9.0888 104.653 9.5905Z"
                fill="#0077FF"
              />
              <path
                d="M115.854 3.51419V7.36249H118.127V9.18039H115.854V16.1075H113.54V9.20069H112.021V7.38279H113.54V3.51419H115.854Z"
                fill="#0077FF"
              />
              <path
                d="M119.023 13.9757C119.253 13.7386 119.569 13.6052 119.899 13.6061C120.218 13.6119 120.52 13.745 120.74 13.9757C120.983 14.2105 121.12 14.534 121.12 14.872C121.12 15.21 120.983 15.5335 120.74 15.7683C120.517 15.9925 120.215 16.1214 119.899 16.1278C119.573 16.129 119.259 16.0038 119.023 15.7784C118.767 15.546 118.626 15.2126 118.638 14.8669C118.635 14.5288 118.775 14.205 119.023 13.9757ZM131.814 0V16.1278H129.495V14.9479C128.59 15.8647 127.35 16.3731 126.062 16.3556C125.29 16.3661 124.531 16.1665 123.864 15.7784C123.201 15.3865 122.665 14.8116 122.32 14.1226C121.935 13.3459 121.744 12.4876 121.763 11.6211C121.744 10.7575 121.946 9.9033 122.35 9.1399C122.727 8.4566 123.295 7.8986 123.986 7.5347C124.719 7.1609 125.533 6.9731 126.355 6.9879C126.973 6.985 127.585 7.1091 128.153 7.3524C128.683 7.5636 129.154 7.9007 129.525 8.3348V0H131.814ZM128.513 13.8947C128.996 13.5609 129.353 13.0739 129.525 12.5123V10.6489C129.352 10.1039 128.994 9.6364 128.513 9.3273C128.011 8.9826 127.414 8.8054 126.806 8.8209C126.335 8.817 125.871 8.9412 125.464 9.1804C124.608 9.6795 124.086 10.5999 124.097 11.5907C124.089 12.5889 124.609 13.5171 125.464 14.0314C125.869 14.2761 126.333 14.404 126.806 14.4011C127.414 14.4173 128.012 14.24 128.513 13.8947ZM140.458 13.6871L141.511 15.4037C141.034 15.6954 140.524 15.9283 139.992 16.0974C139.49 16.2641 138.966 16.3512 138.437 16.3556C137.53 16.3793 136.631 16.1738 135.825 15.7581C135.111 15.3816 134.522 14.8065 134.128 14.1023C133.725 13.3603 133.523 12.526 133.541 11.6819C133.533 10.8505 133.761 10.0341 134.199 9.3273C134.64 8.6099 135.261 8.0214 136.002 7.6208C136.76 7.199 137.615 6.981 138.483 6.9879C139.565 6.9523 140.62 7.3247 141.44 8.031C142.271 8.8155 142.823 9.8506 143.01 10.978L136.27 13.2567C136.5 13.6097 136.82 13.8947 137.197 14.0821C137.597 14.2772 138.038 14.3761 138.483 14.3707C139.196 14.3519 139.886 14.1131 140.458 13.6871ZM136.518 9.5906C136.039 10.1378 135.791 10.8491 135.825 11.5755C135.815 11.6918 135.815 11.8087 135.825 11.9249L140.417 10.2894C140.254 9.8756 139.992 9.5085 139.653 9.2209C139.266 8.9338 138.792 8.7889 138.311 8.8108C137.627 8.7904 136.97 9.0763 136.518 9.5906Z"
                fill="#0077FF"
              />
            </svg>
          </Link>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  maxWidth: "15rem",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                Contact
              </Box>
              <Box sx={{ maxWidth: "15rem", marginTop: "1rem" }}>
                <CallIcon />
                Telephone:
                <Link href="/" color="inherit">
                  0800 723 49 42
                </Link>
              </Box>
              (Mo.-Do. 10-17 Uhr, Fr. 9-16 Uhr)
              <Box sx={{ maxWidth: "15rem", marginTop: "1rem" }}>
                <EmailIcon />
                E-Mail:
                <Link href="/" color="inherit">
                  info@vermietet.de
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  maxWidth: "15rem",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                Zenhomes GmbH
              </Box>
              <Box sx={{ maxWidth: "15rem", marginTop: "1rem" }}>
                <Link
                  href="https://www.google.com/maps/place/Zenhomes+GmbH/@52.525265,13.418856,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84e1d5d27f703:0xc9f24deb3ed8dcee!8m2!3d52.5251844!4d13.4211916"
                  color="inherit"
                >
                  <LocationOnIcon /> Mollstr. 31 10249 Berlin
                </Link>
              </Box>
              <Box
                sx={{
                  maxWidth: "15rem",
                  fontWeight: "bolder",
                  fontSize: "20px",
                  marginTop: "1rem",
                }}
              >
                The Portal
              </Box>
              <Box sx={{ marginTop: "1rem" }}>
                <Link href="https://www.vermietet.de/blog/" color="inherit">
                  BLOG
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://intercom.help/vermietet-Hilfecenter/de/"
                  color="inherit"
                >
                  FAQ
                </Link>
              </Box>
              <Box>
                <Link href="https://www.vermietet.de/ueberuns/" color="inherit">
                  About Us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Box
                sx={{
                  maxWidth: "15rem",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >                Follow us</Box>
              <Box sx={{ marginTop: "1rem"}}>
               <Link href="https://www.facebook.com/vermietet" color="inherit">
                <FacebookIcon sx={{color:"darkblue"}}/>
                </Link>
              </Box>
              <Box sx={{ marginTop: "1rem"}}>
                <Link href="https://twitter.com/vermietet" color="inherit">
                  <TwitterIcon sx={{color: "lightskyblue"}}/>
                </Link>
              </Box>
              <Box sx={{ marginTop: "1rem"}}>
                <Link href="https://www.linkedin.com/company/vermietet.de/" color="inherit">
                  <LinkedInIcon sx={{color: "blue"}}/>
                </Link>
                <Box sx={{ marginTop: "1rem"}}>
                <Link href ="https://consent.youtube.com/m?continue=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUC2-h4jgDd8fLz-YOYhOU33w%3Fcbrd%3D1&gl=NL&m=0&pc=yt&uxe=eomty&hl=en&src=1">
              <YouTubeIcon sx={{color: "red"}}/>
              </Link>
              </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}