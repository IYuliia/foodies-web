import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';
import userImg from '../../../assets/images/user.png';
import foodImg from '../../../assets/images/food.png';

const users = [
  {
    id: '1',
    img: userImg,
    name: 'viktoria',
    ownRecipes: 30,
    recipes: [
      {
        id: '1',
        img: foodImg,
      },
      {
        id: '2',
        img: foodImg,
      },
      {
        id: '3',
        img: foodImg,
      },
      {
        id: '4',
        img: foodImg,
      },
    ],
  },
  {
    id: '2',
    img: userImg,
    name: 'viktoria',
    ownRecipes: 30,
    recipes: [
      {
        id: '1',
        img: foodImg,
      },
      {
        id: '2',
        img: foodImg,
      },
      {
        id: '3',
        img: foodImg,
      },
      {
        id: '4',
        img: foodImg,
      },
    ],
  },
  {
    id: '3',
    img: userImg,
    name: 'viktoria',
    ownRecipes: 30,
    recipes: [
      {
        id: '1',
        img: foodImg,
      },
      {
        id: '2',
        img: foodImg,
      },
      {
        id: '3',
        img: foodImg,
      },
      {
        id: '4',
        img: foodImg,
      },
    ],
  },
  {
    id: '4',
    img: userImg,
    name: 'viktoria',
    ownRecipes: 30,
    recipes: [
      {
        id: '1',
        img: foodImg,
      },
      {
        id: '2',
        img: foodImg,
      },
      {
        id: '3',
        img: foodImg,
      },
      {
        id: '4',
        img: foodImg,
      },
    ],
  },
  {
    id: '5',
    img: userImg,
    name: 'viktoria',
    ownRecipes: 30,
    recipes: [
      {
        id: '1',
        img: foodImg,
      },
      {
        id: '2',
        img: foodImg,
      },
      {
        id: '3',
        img: foodImg,
      },
      {
        id: '4',
        img: foodImg,
      },
    ],
  },
];

const Followers = () => {
  const onFollow = id => {
    console.log('follow', id);
  };

  const onUnfollow = id => {
    console.log('unfollow', id);
  };

  return (
    <ListItems
      emptyText={EMPTY_TEXT.FOLLOWERS}
      currentPage={1}
      onCurrentPageChange={() => {}}
      list={users}
      followingList={['2', '4']}
      type={TYPE_TABS.USER}
      onFollow={onFollow}
      onUnfollow={onUnfollow}
    />
  );
};

export default Followers;
