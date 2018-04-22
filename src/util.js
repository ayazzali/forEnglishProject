import { StackNavigator } from "react-navigation"

const _REST = "http://192.168.43.252:3000"
  , _users = "users"

export function RestFetch(route = 'posts/1/comments', action = "GET", bodyThatIWillStringify) {
  console.log(route);
  return fetch(_REST + '/' + route, {
    headers: { 'Content-Type': 'application/json' },
    method: action,
    body: JSON.stringify(bodyThatIWillStringify)
  })
    .then(e => e.json())
    .then(res => {
      console.log('[from RestFetch] V')
      console.log(res);//todo delete
      return res;
    })

}
/// useless
export let screens = {
  _CategoriesList: "_CategoriesList",
  _CategoryButton: "_CategoryButton",
  _Login: "_Login",
  _CategoryFull: "_CategoryFull",
  _MainTeacher: "_MainTeacher",
  _TeacherStat: "_TeacherStat",
}
export const DB={
  usersCategories:'usersCategories',
  categories:'categories',
  users:'users',
}