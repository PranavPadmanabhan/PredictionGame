import { useRouter } from 'next/router';
import React, { useState } from 'react';

type icons = {
  height?: string;
  width?: string;
  className?: string;
  title?: string;
  active?: boolean;
  onClick?: () => void;
};

const activeColor = '#02FFF0';

export const ContestIcon = ({
  height,
  width,
  className,
  title,
  active,
  onClick,
}: icons) => {
  const router = useRouter();
  const Height = height ? height : '40';
  const Width = width ? width : '45';
  const [hover, sethover] = useState<boolean>(false);
  const isActive = active || router.pathname.includes('/contests/');
  const Color = isActive
    ? activeColor
    : hover
    ? 'white'
    : 'rgba(255, 255, 255, 0.5)';
  return (
    <div
      onClick={onClick}
      className={`${className} my-2 flex h-[5%] min-h-[50px] w-auto cursor-pointer items-center justify-start gap-x-4 xl1700:min-h-[65px] xl2100:min-h-[75px] xxl3100:min-h-[140px]`}
    >
      <svg
        width='40'
        height='40'
        viewBox={`0 0 ${Width} ${Height}`}
        fill='none'
        onMouseOver={() => sethover(true)}
        onMouseOut={() => sethover(false)}
        className='scale-95  xl1700:mr-[10px] xl1700:scale-[1.2] xl1900:mr-[15px] xl1900:scale-[1.25] xl2100:mr-[20px] xl2100:scale-[1.4] xxl3100:mr-[50px] xxl3100:scale-[2]'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.0307 38.4375C10.3164 38.4386 9.60519 38.3567 8.91569 38.1941C6.84608 37.6792 5.09023 36.4773 4.02485 34.8461C2.95946 33.2149 2.66942 31.2844 3.21694 29.4688L6.63913 18.1425C6.90917 17.2305 7.3846 16.3745 8.0377 15.6244C8.6908 14.8743 9.50852 14.2451 10.4432 13.7735C11.3562 13.3122 12.3651 13.0135 13.4114 12.8947C14.4577 12.7759 15.5206 12.8395 16.5385 13.0816C17.618 13.3408 18.6242 13.7923 19.4938 14.4075C20.3634 15.0227 21.0774 15.7884 21.591 16.6563H25.4098C25.9179 15.7822 26.6299 15.0105 27.5 14.3905C28.37 13.7705 29.379 13.3159 30.4623 13.056C31.4802 12.8138 32.5431 12.7503 33.5894 12.8691C34.6357 12.9878 35.6445 13.2865 36.5576 13.7478C37.4917 14.22 38.309 14.8494 38.9621 15.5994C39.6151 16.3495 40.0908 17.2052 40.3616 18.1169L43.7838 29.4688C44.3395 31.2897 44.0518 33.2282 42.9827 34.8656C41.9137 36.5029 40.1492 37.7077 38.0704 38.2197C37.0524 38.4618 35.9895 38.5254 34.9432 38.4066C33.897 38.2878 32.8881 37.9892 31.9751 37.5278C31.0404 37.0562 30.2227 36.427 29.5696 35.6769C28.9165 34.9268 28.441 34.0708 28.171 33.1588L27.9066 32.0313H19.0941L18.7563 33.1332C18.4863 34.0452 18.0108 34.9012 17.3577 35.6513C16.7046 36.4014 15.8869 37.0306 14.9523 37.5022C13.7589 38.1027 12.4083 38.4248 11.0307 38.4375ZM14.4382 15.375C13.5519 15.3777 12.6814 15.5807 11.9119 15.9644C11.3137 16.269 10.7904 16.6736 10.372 17.1552C9.95355 17.6367 9.64832 18.1856 9.47381 18.7703L6.05163 30.0966C5.69353 31.2635 5.87447 32.5063 6.55558 33.5581C7.23669 34.6099 8.3636 35.3866 9.69413 35.7213C10.3367 35.8742 11.0077 35.9144 11.6682 35.8396C12.3287 35.7649 12.9657 35.5766 13.5423 35.2857C14.141 34.9816 14.6647 34.5771 15.0832 34.0955C15.5017 33.6139 15.8066 33.0647 15.9804 32.4797L16.891 29.4688H30.1098L31.0057 32.4797C31.3611 33.6595 32.2378 34.6684 33.4438 35.2857C34.0232 35.5763 34.6626 35.7644 35.3255 35.8391C35.9883 35.9139 36.6616 35.8738 37.3066 35.7213C38.6388 35.3897 39.7671 34.6129 40.4464 33.5597C41.1257 32.5065 41.3011 31.262 40.9344 30.0966L37.5123 18.7703C37.3433 18.1853 37.0418 17.6356 36.6256 17.1537C36.2094 16.6718 35.6869 16.2675 35.0888 15.9644C34.5094 15.6738 33.87 15.4857 33.2071 15.4109C32.5443 15.3362 31.8711 15.3762 31.226 15.5288C30.4282 15.7272 29.6963 16.0887 29.0909 16.5834C28.4854 17.0781 28.0241 17.6917 27.7451 18.3732L27.3926 19.2188H19.6082L19.2557 18.3732C18.9742 17.6908 18.5102 17.0768 17.9023 16.5821C17.2944 16.0874 16.56 15.7263 15.7601 15.5288C15.329 15.4274 14.8846 15.3757 14.4382 15.375Z'
          fill={Color}
        />
        <path
          d='M14.6875 25.625C14.1065 25.625 13.5386 25.4747 13.0555 25.1931C12.5724 24.9116 12.1959 24.5114 11.9736 24.0431C11.7513 23.5749 11.6931 23.0597 11.8064 22.5626C11.9198 22.0655 12.1996 21.6089 12.6104 21.2505C13.0212 20.8922 13.5446 20.6481 14.1144 20.5492C14.6842 20.4504 15.2749 20.5011 15.8116 20.6951C16.3484 20.889 16.8072 21.2175 17.1299 21.6389C17.4527 22.0603 17.625 22.5557 17.625 23.0625C17.625 23.7421 17.3155 24.3939 16.7646 24.8745C16.2137 25.355 15.4666 25.625 14.6875 25.625Z'
          fill={Color}
        />
        <path
          d='M32.3125 21.7812C33.1237 21.7812 33.7812 21.2076 33.7812 20.5C33.7812 19.7924 33.1237 19.2188 32.3125 19.2188C31.5013 19.2188 30.8438 19.7924 30.8438 20.5C30.8438 21.2076 31.5013 21.7812 32.3125 21.7812Z'
          fill={Color}
        />
        <path
          d='M32.3125 26.9062C33.1237 26.9062 33.7812 26.3326 33.7812 25.625C33.7812 24.9174 33.1237 24.3438 32.3125 24.3438C31.5013 24.3438 30.8438 24.9174 30.8438 25.625C30.8438 26.3326 31.5013 26.9062 32.3125 26.9062Z'
          fill={Color}
        />
        <path
          d='M29.375 24.3438C30.1862 24.3438 30.8438 23.7701 30.8438 23.0625C30.8438 22.3549 30.1862 21.7812 29.375 21.7812C28.5638 21.7812 27.9062 22.3549 27.9062 23.0625C27.9062 23.7701 28.5638 24.3438 29.375 24.3438Z'
          fill={Color}
        />
        <path
          d='M35.25 24.3438C36.0612 24.3438 36.7188 23.7701 36.7188 23.0625C36.7188 22.3549 36.0612 21.7812 35.25 21.7812C34.4388 21.7812 33.7812 22.3549 33.7812 23.0625C33.7812 23.7701 34.4388 24.3438 35.25 24.3438Z'
          fill={Color}
        />
        <path
          d='M20.1953 11.5313L17.9922 9.82724C18.6813 9.14557 19.5289 8.59963 20.4785 8.22568C21.4281 7.85173 22.4581 7.65833 23.5 7.65833C24.5419 7.65833 25.5719 7.85173 26.5215 8.22568C27.4711 8.59963 28.3187 9.14557 29.0078 9.82724L26.8047 11.5313C26.3912 11.1223 25.8827 10.7947 25.3129 10.5704C24.7431 10.346 24.1251 10.23 23.5 10.23C22.8749 10.23 22.2569 10.346 21.6871 10.5704C21.1173 10.7947 20.6088 11.1223 20.1953 11.5313Z'
          fill={Color}
        />
        <path
          d='M31.2109 8.16158C30.2461 7.20724 29.0596 6.44292 27.7301 5.91939C26.4006 5.39586 24.9587 5.1251 23.5 5.1251C22.0413 5.1251 20.5994 5.39586 19.2699 5.91939C17.9404 6.44292 16.7539 7.20724 15.7891 8.16158L13.5859 6.47033C14.8264 5.24333 16.352 4.26063 18.0613 3.58752C19.7706 2.9144 21.6246 2.56628 23.5 2.56628C25.3754 2.56628 27.2294 2.9144 28.9387 3.58752C30.648 4.26063 32.1736 5.24333 33.4141 6.47033L31.2109 8.16158Z'
          fill={Color}
        />
      </svg>
      <h1
        onMouseOver={() => sethover(true)}
        onMouseOut={() => sethover(false)}
        className={`font-poppins text-[1.25rem] font-[700]  xl1700:text-[1.5rem] xl1900:text-[1.7rem] xl2100:text-[2rem] xxl3100:text-[3rem]  ${
          isActive
            ? 'text-activeSideBarTextColor'
            : hover
            ? 'text-white'
            : 'text-sideBarTextColor'
        } lg1200:ml-3`}
      >
        {title}
      </h1>
    </div>
  );
};

export const PredictionsIcon = ({
  height,
  width,
  className,
  title,
  active,
  onClick,
}: icons) => {
  const router = useRouter();
  const Height = height ? height : '31';
  const Width = width ? width : '25';
  const [hover, sethover] = useState<boolean>(false);
  const isActive = active || router.pathname.includes('/predictions/');
  const Color = isActive
    ? activeColor
    : hover
    ? 'white'
    : 'rgba(255, 255, 255, 0.5)';

  return (
    <div
      onClick={onClick}
      className={`${className} my-2 flex h-[5%] min-h-[50px] w-auto cursor-pointer items-center justify-start gap-x-7 pl-1 xl1700:min-h-[65px] xl2100:min-h-[75px] xxl3100:min-h-[140px] `}
    >
      {' '}
      <svg
        width={Width}
        height={Height}
        onMouseOver={() => sethover(true)}
        onMouseOut={() => sethover(false)}
        className='scale-125 xl1700:mr-[10px] xl1700:scale-[1.4] xl1900:mr-[15px] xl1900:scale-[1.45] xl2100:mr-[20px] xl2100:scale-[1.7] xxl3100:mr-[50px] xxl3100:scale-[2.5]  '
        viewBox={`0 0 ${Width} ${Height}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3.95866 30.0833C3.01908 30.0833 2.21502 29.7979 1.54649 29.2272C0.876825 28.6556 0.541992 27.9687 0.541992 27.1666V12.5833C0.541992 11.7812 0.876825 11.0943 1.54649 10.5227C2.21502 9.95197 3.01908 9.66663 3.95866 9.66663H21.042C21.9816 9.66663 22.7862 9.95197 23.4559 10.5227C24.1244 11.0943 24.4587 11.7812 24.4587 12.5833V27.1666C24.4587 27.9687 24.1244 28.6556 23.4559 29.2272C22.7862 29.7979 21.9816 30.0833 21.042 30.0833H3.95866ZM10.792 27.8958H14.2087V25.7083H10.792V27.8958ZM10.792 24.25H14.2087C14.2087 23.6909 14.429 23.1382 14.8698 22.5918C15.3117 22.0445 15.8031 21.4733 16.3441 20.8783C16.885 20.2823 17.3765 19.662 17.8184 19.0175C18.2591 18.3738 18.4795 17.6875 18.4795 16.9583C18.4795 15.5486 17.8958 14.3454 16.7285 13.3489C15.5611 12.3524 14.1517 11.8541 12.5003 11.8541C10.8489 11.8541 9.43956 12.3524 8.2722 13.3489C7.10484 14.3454 6.52116 15.5486 6.52116 16.9583C6.52116 17.6875 6.74153 18.3738 7.18228 19.0175C7.62417 19.662 8.1156 20.2823 8.65658 20.8783C9.19755 21.4733 9.68898 22.0445 10.1309 22.5918C10.5716 23.1382 10.792 23.6909 10.792 24.25ZM2.25033 7.47913C2.25033 6.87149 2.49974 6.35524 2.99858 5.93038C3.49627 5.50454 4.10102 5.29163 4.81283 5.29163H20.1878C20.8996 5.29163 21.5044 5.50454 22.0021 5.93038C22.5009 6.35524 22.7503 6.87149 22.7503 7.47913H2.25033ZM3.95866 3.10413C3.95866 2.49649 4.20808 1.98024 4.70691 1.55538C5.2046 1.12954 5.80935 0.916626 6.52116 0.916626H18.4795C19.1913 0.916626 19.796 1.12954 20.2937 1.55538C20.7926 1.98024 21.042 2.49649 21.042 3.10413H3.95866Z'
          fill={Color}
        />
      </svg>
      <h1
        onMouseOver={() => sethover(true)}
        onMouseOut={() => sethover(false)}
        className={`whitespace-nowrap font-poppins  text-[1.25rem] font-[700] xl1700:text-[1.5rem] xl1900:text-[1.7rem] xl2100:text-[2rem] xxl3100:text-[3rem] ${
          isActive
            ? 'text-activeSideBarTextColor'
            : hover
            ? 'text-white'
            : 'text-sideBarTextColor'
        } lg1200:ml-3`}
      >
        {title}
      </h1>
    </div>
  );
};

export const WalletIcon = ({
  height,
  width,
  className,
  title,
  active,
  onClick,
}: icons) => {
  const Height = height ? height : '24';
  const Width = width ? width : '33';
  const [hover, sethover] = useState<boolean>(false);

  const Color = active
    ? activeColor
    : hover
    ? 'white'
    : 'rgba(255, 255, 255, 0.5)';

  return (
    <div
      onClick={onClick}
      className={`${className} my-2 flex h-[5%] min-h-[50px] w-auto cursor-pointer items-center justify-start gap-x-6 xl1700:min-h-[65px] xl2100:min-h-[75px] xxl3100:min-h-[140px]`}
    >
      <svg
        width={Width}
        height={Height}
        viewBox={`0 0 ${Width} ${Height}`}
        fill='none'
        onMouseOver={() => sethover(true)}
        onMouseOut={() => sethover(false)}
        className='xl1700:mr-[10px] xl1700:scale-[1.2] xl1900:mr-[15px] xl1900:scale-[1.3] xl2100:mr-[20px] xl2100:scale-[1.5] xxl3100:mr-[50px] xxl3100:scale-[2]'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.3333 14C23.0736 14 23.6858 13.8111 24.1698 13.4333C24.6538 13.0556 24.8958 12.5778 24.8958 12C24.8958 11.4222 24.6538 10.9444 24.1698 10.5667C23.6858 10.1889 23.0736 10 22.3333 10C21.5931 10 20.9809 10.1889 20.4969 10.5667C20.0128 10.9444 19.7708 11.4222 19.7708 12C19.7708 12.5778 20.0128 13.0556 20.4969 13.4333C20.9809 13.8111 21.5931 14 22.3333 14ZM17.2083 18.6667C16.2687 18.6667 15.4647 18.4058 14.7962 17.884C14.1265 17.3613 13.7917 16.7333 13.7917 16V8C13.7917 7.26667 14.1265 6.63867 14.7962 6.116C15.4647 5.59422 16.2687 5.33333 17.2083 5.33333H29.1667C30.1062 5.33333 30.9109 5.59422 31.5805 6.116C32.2491 6.63867 32.5833 7.26667 32.5833 8V16C32.5833 16.7333 32.2491 17.3613 31.5805 17.884C30.9109 18.4058 30.1062 18.6667 29.1667 18.6667H17.2083ZM3.54167 24C2.60208 24 1.79746 23.7391 1.12779 23.2173C0.459264 22.6947 0.125 22.0667 0.125 21.3333V2.66667C0.125 1.93333 0.459264 1.30533 1.12779 0.782667C1.79746 0.260889 2.60208 0 3.54167 0H27.4583C28.3979 0 29.2025 0.260889 29.8722 0.782667C30.5407 1.30533 30.875 1.93333 30.875 2.66667H17.2083C15.1868 2.66667 13.5428 3.16089 12.2764 4.14933C11.0088 5.13867 10.375 6.42222 10.375 8V16C10.375 17.5778 11.0088 18.8609 12.2764 19.8493C13.5428 20.8387 15.1868 21.3333 17.2083 21.3333H30.875C30.875 22.0667 30.5407 22.6947 29.8722 23.2173C29.2025 23.7391 28.3979 24 27.4583 24H3.54167Z'
          fill={Color}
        />
      </svg>
      <h1
        onMouseOver={() => sethover(true)}
        onMouseOut={() => sethover(false)}
        className={`font-poppins text-[1.25rem] font-[700]  xl1700:text-[1.5rem] xl1900:text-[1.7rem] xl2100:text-[2rem] xxl3100:text-[3rem]  ${
          active
            ? 'text-activeSideBarTextColor'
            : hover
            ? 'text-white'
            : 'text-sideBarTextColor'
        } lg1200:ml-3`}
      >
        {title}
      </h1>
    </div>
  );
};

export const FAQIcon = ({
  height,
  width,
  className,
  title,
  active,
  onClick,
}: icons) => {
  const Height = height ? height : '33';
  const Width = width ? width : '35';
  const [hover, sethover] = useState<boolean>(false);

  const Color = active
    ? activeColor
    : hover
    ? 'white'
    : 'rgba(255, 255, 255, 0.5)';

  return (
    <div
      onClick={onClick}
      className={`${className} my-2 flex h-[5%] min-h-[50px] w-auto cursor-pointer items-center justify-start gap-x-6 xl1700:min-h-[65px] xl2100:min-h-[75px] xxl3100:min-h-[140px]`}
    >
      <svg
        width={Width}
        height={Height}
        viewBox={`0 0 ${Width} ${Height}`}
        fill='none'
        onMouseOver={() => sethover(true)}
        onMouseOut={() => sethover(false)}
        className='xl1700:mr-[10px] xl1700:scale-[1.2] xl1900:mr-[15px] xl1900:scale-[1.3] xl2100:mr-[20px] xl2100:scale-[1.5] xxl3100:mr-[50px] xxl3100:scale-[2]'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M26.042 0.151245H8.95866C3.83366 0.151245 0.416992 3.56791 0.416992 8.69291V18.9429C0.416992 24.0679 3.83366 27.4846 8.95866 27.4846V31.1233C8.95866 32.49 10.4791 33.31 11.6066 32.5412L19.2087 27.4846H26.042C31.167 27.4846 34.5837 24.0679 34.5837 18.9429V8.69291C34.5837 3.56791 31.167 0.151245 26.042 0.151245ZM17.5003 20.9417C17.1605 20.9417 16.8346 20.8067 16.5943 20.5664C16.3541 20.3261 16.2191 20.0002 16.2191 19.6604C16.2191 19.3206 16.3541 18.9947 16.5943 18.7544C16.8346 18.5141 17.1605 18.3792 17.5003 18.3792C17.8401 18.3792 18.166 18.5141 18.4063 18.7544C18.6466 18.9947 18.7816 19.3206 18.7816 19.6604C18.7816 20.0002 18.6466 20.3261 18.4063 20.5664C18.166 20.8067 17.8401 20.9417 17.5003 20.9417ZM19.6528 13.8521C18.9866 14.2962 18.7816 14.5867 18.7816 15.065V15.4237C18.7816 16.1242 18.2007 16.705 17.5003 16.705C16.7999 16.705 16.2191 16.1242 16.2191 15.4237V15.065C16.2191 13.0833 17.6712 12.1096 18.2178 11.7337C18.8499 11.3067 19.0549 11.0162 19.0549 10.5721C19.0549 9.71791 18.3545 9.01749 17.5003 9.01749C16.6462 9.01749 15.9457 9.71791 15.9457 10.5721C15.9457 11.2725 15.3649 11.8533 14.6645 11.8533C13.9641 11.8533 13.3832 11.2725 13.3832 10.5721C13.3832 8.29999 15.2282 6.45499 17.5003 6.45499C19.7724 6.45499 21.6174 8.29999 21.6174 10.5721C21.6174 12.5196 20.1824 13.4933 19.6528 13.8521Z'
          fill={Color}
          color='red'
        />
      </svg>
      <h1
        onMouseOver={() => sethover(true)}
        onMouseOut={() => sethover(false)}
        className={`font-poppins text-[1.25rem] font-[700]  xl1700:text-[1.5rem] xl1900:text-[1.7rem] xl2100:text-[2rem] xxl3100:text-[3rem]  ${
          active
            ? 'text-activeSideBarTextColor'
            : hover
            ? 'text-white'
            : 'text-sideBarTextColor'
        } lg1200:ml-3`}
      >
        {title}
      </h1>
    </div>
  );
};

export const BalanceContainer = ({ className }: { className?: string }) => {
  return (
    <svg
      width='408'
      height='339'
      viewBox='0 0 408 339'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.5' filter='url(#filter0_d_434_2)'>
        <ellipse
          cx='277.406'
          cy='220.319'
          rx='83.1967'
          ry='86.6547'
          transform='rotate(22.8141 277.406 220.319)'
          fill='#33FFFF'
        />
        <ellipse
          cx='210.077'
          cy='165.812'
          rx='100.41'
          ry='102.086'
          transform='rotate(22.8141 210.077 165.812)'
          fill='#FD70DE'
        />
        <ellipse
          cx='111.082'
          cy='76.5214'
          rx='53.4324'
          ry='60.5396'
          transform='rotate(22.8141 111.082 76.5214)'
          fill='#FFF84F'
        />
        <g filter='url(#filter1_b_434_2)'>
          <rect
            x='85.3037'
            width='350'
            height='220'
            rx='50'
            transform='rotate(22.8141 85.3037 0)'
            fill='#E9E9E9'
            fill-opacity='0.33'
          />
        </g>
      </g>
      <g opacity='0.8' filter='url(#filter2_d_434_2)'>
        <ellipse
          cx='286.045'
          cy='204.808'
          rx='83.1967'
          ry='86.6547'
          transform='rotate(11.4237 286.045 204.808)'
          fill='#33FFFF'
        />
        <ellipse
          cx='209.277'
          cy='164.672'
          rx='100.41'
          ry='102.086'
          transform='rotate(11.4237 209.277 164.672)'
          fill='#FD70DE'
        />
        <ellipse
          cx='94.5981'
          cy='96.6909'
          rx='53.4324'
          ry='60.5396'
          transform='rotate(11.4237 94.5981 96.6909)'
          fill='#FFF84F'
        />
        <g filter='url(#filter3_b_434_2)'>
          <rect
            x='54.2148'
            y='26.7677'
            width='350'
            height='220'
            rx='50'
            transform='rotate(11.4237 54.2148 26.7677)'
            fill='#E9E9E9'
            fill-opacity='0.33'
          />
        </g>
      </g>
      <g filter='url(#filter4_dii_434_2)'>
        <ellipse
          cx='298.493'
          cy='187.846'
          rx='89.6148'
          ry='86.6547'
          fill='#33FFFF'
        />
        <ellipse
          cx='208.879'
          cy='163.71'
          rx='108.156'
          ry='102.086'
          fill='#FD70DE'
        />
        <ellipse
          cx='73.2965'
          cy='119.789'
          rx='57.5543'
          ry='60.5396'
          fill='#FFF84F'
        />
        <g filter='url(#filter5_b_434_2)'>
          <rect
            x='15.7422'
            y='59.2494'
            width='377'
            height='220'
            rx='50'
            fill='#E9E9E9'
            fill-opacity='0.33'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_d_434_2'
          x='1.46289'
          y='1.46252'
          width='404.997'
          height='335.574'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='7' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_434_2'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_434_2'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_b_434_2'
          x='-84.5371'
          y='-84.5375'
          width='576.997'
          height='507.574'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='50' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur_434_2'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_434_2'
            result='shape'
          />
        </filter>
        <filter
          id='filter2_d_434_2'
          x='5.54395'
          y='21.6705'
          width='396.834'
          height='295.158'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='7' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_434_2'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_434_2'
            result='shape'
          />
        </filter>
        <filter
          id='filter3_b_434_2'
          x='-80.4561'
          y='-64.3295'
          width='568.834'
          height='467.158'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='50' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur_434_2'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_434_2'
            result='shape'
          />
        </filter>
        <filter
          id='filter4_dii_434_2'
          x='1.74219'
          y='45.2494'
          width='405'
          height='248'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='7' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_434_2'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_434_2'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-7' dy='-5' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect2_innerShadow_434_2'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='5' />
          <feGaussianBlur stdDeviation='4.5' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_innerShadow_434_2'
            result='effect3_innerShadow_434_2'
          />
        </filter>
        <filter
          id='filter5_b_434_2'
          x='-84.2578'
          y='-40.7506'
          width='577'
          height='420'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='50' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur_434_2'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_434_2'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export const ArrowDown = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width='33'
      height='38'
      viewBox='0 0 33 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M30.8325 23.4046L16.4163 35.2917L2 23.4046M16.4163 2V34.9588'
        stroke='white'
        stroke-width='3.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export const ArrowUp = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width='33'
      height='38'
      viewBox='0 0 33 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M30.8325 13.8871L16.4163 2L2 13.8871M16.4163 35.2917V2.33292'
        stroke='white'
        stroke-width='3.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export const CloseIcon = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      width='35'
      height='35'
      viewBox='0 0 35 35'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.5003 2.91663C9.46491 2.91663 2.91699 9.46454 2.91699 17.5C2.91699 25.5354 9.46491 32.0833 17.5003 32.0833C25.5357 32.0833 32.0837 25.5354 32.0837 17.5C32.0837 9.46454 25.5357 2.91663 17.5003 2.91663ZM22.4003 20.8541C22.8232 21.277 22.8232 21.977 22.4003 22.4C22.1816 22.6187 21.9045 22.7208 21.6274 22.7208C21.3503 22.7208 21.0732 22.6187 20.8545 22.4L17.5003 19.0458L14.1462 22.4C13.9274 22.6187 13.6503 22.7208 13.3732 22.7208C13.0962 22.7208 12.8191 22.6187 12.6003 22.4C12.3969 22.1941 12.2828 21.9164 12.2828 21.627C12.2828 21.3377 12.3969 21.06 12.6003 20.8541L15.9545 17.5L12.6003 14.1458C12.3969 13.94 12.2828 13.6623 12.2828 13.3729C12.2828 13.0835 12.3969 12.8058 12.6003 12.6C13.0232 12.177 13.7232 12.177 14.1462 12.6L17.5003 15.9541L20.8545 12.6C21.2774 12.177 21.9774 12.177 22.4003 12.6C22.8232 13.0229 22.8232 13.7229 22.4003 14.1458L19.0462 17.5L22.4003 20.8541Z'
        fill='white'
      />
    </svg>
  );
};

export const EtherIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width='42'
      height='69'
      viewBox='0 0 42 69'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.26455 24.2754L19.5558 17.0321C20.3171 16.7246 21.187 16.7246 21.9121 17.0321L39.2033 24.2754C40.7258 24.9246 42.1396 23.1821 41.0883 21.9521L22.9633 1.07625C21.7308 -0.35875 19.7008 -0.35875 18.4683 1.07625L0.343301 21.9521C-0.671699 23.1821 0.742052 24.9246 2.26455 24.2754ZM2.26455 44.0887L19.5921 51.332C20.3533 51.6395 21.2233 51.6395 21.9483 51.332L39.2758 44.0887C40.7983 43.4395 42.212 45.182 41.1608 46.412L23.0358 67.2878C21.8033 68.7228 19.7733 68.7228 18.5408 67.2878L0.415801 46.412C-0.671699 45.182 0.705802 43.4395 2.26455 44.0887ZM19.9545 25.6045L4.9833 32.6428C3.64205 33.2578 3.64205 35.0687 4.9833 35.6837L19.9545 42.722C20.462 42.9612 21.0783 42.9612 21.5858 42.722L36.5571 35.6837C37.8983 35.0687 37.8983 33.2578 36.5571 32.6428L21.5858 25.6045C21.3322 25.4864 21.0531 25.425 20.7702 25.425C20.4873 25.425 20.2082 25.4864 19.9545 25.6045Z'
        fill='white'
      />
    </svg>
  );
};
