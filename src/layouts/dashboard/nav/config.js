// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Words Suggestions',
    path: '/dashboard/WordsSuggestion',
    icon: icon('ic_blog'),
  },
  {
    title: 'Sentence Correction',
    path: '/dashboard/SentenceCorrection',
    icon: icon('ic_blog'),
  },
  {
    title: 'Grammar Checking',
    path: '/dashboard/GrammarChecking',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

const SupportNav=[
  {
    title: 'SignOut',
    path: '/login',
    icon: icon('ic_lock'),
  },
]
// export default navConfig;
export { navConfig, SupportNav };

