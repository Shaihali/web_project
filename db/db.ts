import { ICardData, IDocCardData, ISmallCardData } from "@/types";

const IMAGE_PATH_LARGE =
  "https://s3-alpha-sig.figma.com/img/e14d/869c/b80b878fe960c3607502514fd5d35b42?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qxKGfgMtOsydyT62icU6h267d2-qItMYGY7tfhgGrfZXFJERARR75Y7fatof4PJijve2YJxv0EVg3Lx9HEDwWl-y2S4R9YoHPcJFP67WIdrKpbcRLyIINEv5nzG0rda-E6aPf26JXNPm6~LjvN42T5LkaVfkP2Uu5p3a8Unr3p8yn70db1k~A1A8P0y9VQJ4x0eD6Lb8n~6YQcuDTR2ZUA82hXrpJPpt2jYn3oaKydApe4KvkxmG~rEoOo~5dcxTWQWRtT13~HbaHaLC2W2pk321T2ZWNOjlLyBJR9GNXgaJpW7ymATj~C99bgjRcMNKtUxjSbxYdegN7L4fc5Gruw__";
const IMAGE_PATH_LARGE2 =
  "https://s3-alpha-sig.figma.com/img/3d97/81e5/e6f9f5eda73baff88d198effdacce86e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MnDSCktx2aCQN~II1MkSeVquMZioFO0tI~bKHm-C7A~RS1rxkamzT7wbFj2SNT9VN5w6Fn8Uui72F~tNoYvwCekln5n-VkKgT0~JhFVMPmMcz3ZXOiidfdt23EVlaCWfUNYBUUuvkegTmeMSIC4MItbIraWO5obuRdlnCPjlFUkAl59T9IW0zvbebXjO2rCppC~eAj3Fi5XhIRFJFmwZVYZdJw6wOOVp9cHkIsbZYYb9iN1y9a5DG1o1QhsTE38wFiBAI3FQ~WbCBY-Kg-afKDkw0Hzindn5YLIDokD~dJpDWI~Agug0x8caJ1m9173K1T~9hf2uj8-60LQoVgl2KQ__";
const IMAGEPATH_LARGE3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wk7YbOy_1P2JlNjUoBLcIqBV0PN-8aiTsTrBnchnjQ&s";

const IMAGE_PATH =
  "https://s3-alpha-sig.figma.com/img/3261/a5da/2491aaca49385e0a62bfaadf56c87015?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2~oBk3SihYc0x6UE3B-~JCX8c9bMSxzJcwRSaY0M-jT-ac9tJFyE0J8TQpb6vzEHa68zgVXhJHn83ENVMydwEyzfMUZMUb~GkwjWieVPgiDtVJ9W77XMkhmXeSqcSWLZNeO1hoERJGOzagEdWHGmZLsVn~XJ4wGs76S~wA~OH~B3qmh~PF~O6g2pBsOiKqxBIRr~I9eBAy6Zg4DjBQxMqiLD7rWvW4t7afBdp772OCV9wqvlddg05dTDUgi57Jo1EANbv2LaHXAlm5KWIcTcDOF0FLpCV7zPRb3Vya5YBbYJXK4Mrg2KvCztNlBfzxJ~UvKCNauE~KTzVOPyeCHNA__";
const IMAGE_PATH2 =
  "https://s3-alpha-sig.figma.com/img/9da4/66fc/fc4ef1d53503d65669260ebb153c9895?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RbDsbL3wav-7nrMd~fnFi97GO4WlLdtW6vHW2L9KCLlCthSntlRJ7YzIeSaRy7FnlWkacc7v9PmTGkzfZSHHgcBaFvriJBK-oEOm~h7o1X6E-8RGeSJZe6yFvTkOM-mssXzGhz29Gyf~hFKL7RmBXHiP1-jd~cAG5whHVrgGem9Cg2IKHQNt-CYCoWx85sNgEG0TjNvuqFAVItSl4UZ6aW0WIFbM8dMJwUy13F-E1ZVAM-upZIKBqP1Y06mfYv8lWOfnpg~TlYHkqt-~BMnxf0fYeA8mbiy-yVKfvjLa34gstiihXlw7QhVB1-s4xC8EDx2Cj~s-D4sUDYQ~y9qQeg__";
const IMAGE_PATH3 =
  "https://s3-alpha-sig.figma.com/img/da83/f975/8da18de7bb3dfc93669e8870e608d88e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kYhcKgVqs186nvRzlADyMjRO23MDFzzZcLkNTR5sHWeorFcqQUnnzYVYzelmZkvS3Oke1B6rJ~kDLBXJt~UvPb0Rz9oLOx-AwylH6FedmFJpTqOn4gqkH~sHCcPVWIco1Ccm9U22FDiFaTfS5Pb7t8tvVVryi59ulYcVZ~~DLnJrJhAZE2816ZjvSwFP4uo2R5OMJrPYXyKIMaE1rWFeXl~vB2YHVelrlma6vy1Y6Y4Xa2N~ov3aZR~TVClHyCyO9~v3oJAACOfrHS-mfjKrhjTLSM5cHv-SZXn7z9lW1PF3LHFKYW~Sa~761zbe19XWEAbasHe7Jnr~fMGua402Tg__";
const IMAGE_PATH4 =
  "https://s3-alpha-sig.figma.com/img/b81f/d840/8e312fdf861f6520e8caaa3e6bd47939?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dR174hw0E6jlGG8WJviiei~c4hkjNasFMUcnirg6gS7yz1tOwQepDmeHCox~WxH~QkCPZ4g~0aHJl5tS5gOtMw5bEZnp2wJT5kXU-Lg~PA~e6iWYVJSNdqHe4ltNK36QJODzOEhGvQXuSRDNB2v0HY5O-f1pi25fMmVsVUoRxRaGCBfgDT0vrVL3Pq62fpyajEm6fTF9mq5KLPmMyNUPWRbUMCdH81lehZl~8lzbN00wgbniwa8QmAY2BYe7BUIO8hdHaUrYSlOoEeDP6oPCShOAY6EcNGE9pAbVsYnsg2TEAL6-PAXX6NCP0nxIKCB80ILiATEyDxNzHTGgkBzUvQ__";
const IMAGE_PATH5 =
  "https://s3-alpha-sig.figma.com/img/69ab/816f/c3f69e2134406908cc4f3fc018a85b96?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFiaiVzdGx5Ez13apr-ssgyEfK~NJMCTPvfihJlL3~aJT9GhiW0l68DOhhR3p44JzXZz815Ya3Ytw-~RY2RrOVvpCxBo2-oAq1jOSUoY8ZEgaoG4RDF4zTuV3qMi0qOarBVkhamZ1joXWBEHQDp9DKsp3vFMC-q5Q04X3Hbr~zbfeehaO7DTz6HIc7cS7s1CGIdvSIhBYvG5uvFFizW~Yc~jaO0vat0dllmbBfamS-hjItmv6f2sNl8fQbOo6YvKtDYkmKMzkJlI8cA52Pdo8a34CLehZ4QfGOWYItZKCTZLzUIi0R5XXRRgO0jAGF-XtdVBMIq~jWX2qhS-uB9CeA__";

const IMAGE_PATH6 =
  "https://s3-alpha-sig.figma.com/img/e33b/3156/d0e615d1c8ae61367bbf6058b55424e6?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DUZnZlsPl5yfncd-EDmjkmTc1idkBH0Zyid~fgmbqcRiaQvtjaRF~j8df3d-NgA0fW9iO2spdMRosR2LBCfSuq-RyhJEUWHI5n3Kn~2exa5-W-IM330TSNMDnKP6twPYH4H4TNh37dqrao0IrUu3V5aTWF6Um1jeC53F7Nrvkpr0DdBCbqpOZ1eXCu2M8e98jrkrd1p~KQIqQjm7mBsSfik6n9fHux0jiQrXweuQZjKslIM-SVfDRMfnb7py4Dc5B-S~obKwDn0BKw1lR4Or2Pj~6oNvrzFrBUhES~koIiSk5W0VD5p61Yn7EHCODRCTXKYMKAVUDofLoh0kUa2LlQ__";
const IMAGE_PATH7 =
  "https://s3-alpha-sig.figma.com/img/4acd/6955/32f94e99e784798d365c550eb913a20b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSKbhBlhmd9Nbyoif6g0aJCnKwhdol2pb~tLprPczXVh8~x81t2kZIhS0lJK3x2q9FhYpsojFMNABkD0q9DhE4yHzCp-LG7~QXT6tiM~4TUditmeNrTh5U~H2ET4gFE8SndUqwkSBbEOviiDazjNLxvUIQTBgJVTJ1bMOVREnTDT2XSqoYb~fH-N32LzDBCi0WSM7VN5nYs27kmTySTD3mBkTJ-0J4-oDm6m25IVqcw3-43RWN9ZSicDrapmY5UanWSl55hYrqtOzrl4tNTRbPOoUpM8DK2z98NDCtuMznRI3Aph6RNWJxGLzJHAlaMmo2Ra2xWd2~fEfuro64~x4A__";
const IMAGE_PATH8 =
  "https://s3-alpha-sig.figma.com/img/2d94/b569/d32cca26714326d40ed7523060b49aca?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GWA3uo3ba9fJZS7A2NlZrG6erJtCZP1TuyhOPC18TTvf~TwBprN0Fyfuz-GCnUbQ0p7dCDppHiSCRy2EL98f-EhOrsVoAbRXqaS1hqVaOCCf74cT~HsVMlhRaDndxbMn-jv-51ax7gvvrLxb~99f7Fh0YcAQo9O~CozO9eoXlyatrZcGwNpsJeLKKjspJhc1IEaAebMsR8yqohYvXIK2RgQQcVyXrb9VSJrBDoaGnj9l~CEGhTmiKEIN-ovhA97CWQK5u5MHgHpEi-eLmAI-3PUxaqq3BXMh~dnCN~SAhx7qdq0xUrj~BmufddgO4nT1~K9DP0j0-K6RVv80D6yxaw__";
const IMAGE_PATH9 =
  "https://s3-alpha-sig.figma.com/img/5ca2/1c03/a6d51869bd746d2cf677bd221970d00c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NUvj-pqJ6vb71vcCorVoZXw7biJvbBV-yeVwagmaZ8B9r~fiSO~LDS7PdQJVuWFjyQqvjTtjrbsNiyhee1X8C72IdGhiHV-OWx32Q7iGBnE3HSvTaLUiR8v5IfJfv6nE9FNqxWrTLsbxqPXn0aApnclVlvPa0x48gfCAqecJBrMTMNt4UnK5frnVzDjRz9b7MfnBKY5TVwXU1zHMNW866LnT6ZAl7IovZ11D6EgMIlST0nzGrdzq-CxOZ2KS3Sy74U6TS5WNLbIX-MaZj5S-v~-YBLxOMssdneO1LAmR5X6k88-3dfEidd5FdZFFvKWbw7TCCpH62y~xoyM2AqRh5Q__";
const IMAGE_PATH11 =
  "https://s3-alpha-sig.figma.com/img/c69f/82e5/d800bf45ad8d4f2f0871021796dde408?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C5yyacW8cdoVlR-uaAQh~VIYxXSiMjwMX1gVkv0Hp16iNyC2-vpqrsPTWcLaHpKgBpPF~yxBNghSYvWQm9kgaV8YWOYPm-V0~OJPEhl-1x6s29De0LfissdgE702pFJF8zCIUU509KVmIhLtVvJbBcg0-~3JDU76kval3OCkpAxxa5mGrVBVqdikw3vezsrQLcRIIgKiLsfIvX9Q~Pg-8ZLRAn03B~FaLTNpdzsSyL1m9dPZlDFzdJ8JXDJx6rqmG7BimcP~RAVitCWROa49JgEiFJSkGOyiTMLYnEo3jWomwV1-dQW0ovmUgCbpBtbUZhoUxXmhVeLrfq86UrWaBg__";
const IMAGE_PATH12 =
  "https://s3-alpha-sig.figma.com/img/c892/1712/bdd5cd32c06adf5221e106fbcf6cbdef?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PdvwpJwK81hEP4bV55kIZioRdoHDuXi7NMTeuM5TZw7bYGH3WYpIeAlizKT8qlWAK~JHtKrvi38CU9ZwHniJJngjqpGHS3PZRQb65IP0fvyG9~hj6k85wa3maY32Yd9gBYnNUVYpmcpL7AP1sFM4ee~M8SMMFVWz218XllB8wuk47MLVwAvwNUI1na8NZKk66oWy-sF69b0Uj568N90bTqhIa6vfGFiVkOZlCEzqk95QGu5pnBfmz~rOUNvcFEOspuyXl29dUMTKoXFG6n7wIz5XqqKII-dDwpN~foXwqQpaxeEwy42kXviRPFA6Q2uTCqdHBtY3kk0jPxQWv~D9jQ__";
const IMAGE_PATH13 =
  "https://s3-alpha-sig.figma.com/img/6cbb/18b4/078f9db188c1b4e8774e68414135d627?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NGFGzSX0BjKJFHxEjMuyBRXaSz7acXR3JgAr9DSCM1BzUdPrg0m77gPl4q3T7hbLTfrClrAkjY9zAkA7sEiM~O30PpSMbvRM4wyfjiq9ihxv3eAP2YOCazsT46369CIcoy~NJeYGnBTwS3r08KQDG4o023B08CoiDzmkDiuUtAYxiogFsX2yGP2D1aBSG9QjiZiNBquVkadMt7jWvUZWw9gYoKDL-d0iBRya-ddqgwRa03GXxx2BlKg4GbTIffHhFhDlAFdfkPdKM-8I~WqsxXzIkfru4m1QWvjzjWwyI1R1GCfPMZ16hYTIS8IWLh3eaOyoXQsea~MUHe5VaURa0w__";
export const cardsData: ICardData[] = [
  {
    id: 1,
    title: "Комплексная помощь женщинам",
    description:
      "без определенного места жительства освободившимся из МПС Пермского края",
    image: IMAGE_PATH6,
  },
  {
    id: 2,
    title: "Профилактика правонарушений",
    description:
      "в Пермском крае через осуществление общественного контроля членами ОНК и ресоциализацию освободившихся из мест принудительного содержания через социальное сопровождение",
    image: IMAGE_PATH_LARGE2,
  },
  {
    id: 3,
    title: "Профилактика правонарушений",
    description:
      "в Пермском крае через осуществление общественного контроля членами ОНК и ресоциализацию освободившихся из мест принудительного содержания через социальное сопровождение",
    image: IMAGEPATH_LARGE3,
  },
];

export const smallCardsData: ISmallCardData[] = [
  {
    id: 1,
    description: "Уполномоченный по правам человека в Пермском крае",
    image: IMAGE_PATH2,
  },
  {
    id: 2,
    description: "ГУФСИН России по Пермскому краю",
    image: IMAGE_PATH,
  },
  {
    id: 3,
    description: "Министерство Социального Развития Пермского края",
    image: IMAGE_PATH4,
  },
  {
    id: 4,
    description: "АСЭТ - Альянс Социально-этнических технологий ",
    image: IMAGE_PATH5,
  },
  {
    id: 5,
    description:
      "Пермский краевой центр про профилактике и борьбе со СПИД и инфекционными заболеваниями",
    image: IMAGE_PATH3,
  },
];

export const docCardData: IDocCardData[] = [
  {
    id: 1,
    title: "Прогулки по Ныробу",
    image: IMAGE_PATH6,
    data: {
      image: IMAGE_PATH7,
      text: "Слухи из Ныроба поступали тревожные. Ещё страшнее звучали рассказы очевидцев о жизни в забытых северных деревнях. «Надо съездить, посмотреть», — подумал я. Внимательно изучил...",
    },
  },
  {
    id: 2,
    title: "В отношении главы Чердынского района ведётся проверка ФСБ.",
    image: IMAGE_PATH8,
  },
  {
    id: 3,
    title: "Павел Селуков: Ныроб не отпускает",
    image: IMAGE_PATH9,
  },
  {
    id: 4,
    title:
      "Чердынский участок недр может принести бюджету края около 450 млн руб.",
    image: IMAGE_PATH11,
  },
  {
    id: 5,
    title: "ПАВЕЛ СЕЛУКОВ: «ЛЮДИ ПЕРМСКОГО СЕВЕРА. ЧТО УВИДЕЛОСЬ ЗА ТРИ ДНЯ»",
    image: IMAGE_PATH12,
  },
  {
    id: 6,
    title: "ЧЕРДЫНСКИЕ ТУПИКИ",
    image: IMAGE_PATH13,
  },
];
