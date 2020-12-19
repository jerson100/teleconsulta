import AppRouter from "./components/routers/AppRouter";
// import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./scss/main.scss";
import JeComment from "./components/common/JeComment/JeComment";
import JeTypeUser from "./components/common/JeTypeUser";

const comments = [
  {
    user: {
      idUser: 1,
      name: "Jerson Omar",
      lastname: "Ramírez Ortiz",
      birthday: "14/12/2020 a las 06:25am",
      email: "juamkoo@gmail.com",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU",
      typeUser: {
        idTypeUser: 2,
        name: "Administrador",
        sigla: "adm",
      },
    },
    idComment: 1,
    description: "Comentario",
    date: "12-06-2020 a las 5:00 am",
    likes: 5,
    count: 2,
    idParentComment: null,
  },
  {
    user: {
      idUser: 1,
      name: "Jerson Omar",
      lastname: "Ramírez Ortiz",
      birthday: "14/12/2020 a las 06:25am",
      email: "juamkoo@gmail.com",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU",
      typeUser: {
        idTypeUser: 2,
        name: "Administrador",
        sigla: "adm",
      },
    },
    idComment: 1,
    description: "Comentario",
    date: "12-06-2020 a las 5:00 am",
    likes: 5,
    count: 2,
    idParentComment: null,
  },
  {
    user: {
      idUser: 1,
      name: "Jerson Omar",
      lastname: "Ramírez Ortiz",
      birthday: "14/12/2020 a las 06:25am",
      email: "juamkoo@gmail.com",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU",
      typeUser: {
        idTypeUser: 2,
        name: "Administrador",
        sigla: "adm",
      },
    },
    idComment: 1,
    description: "Comentario",
    date: "12-06-2020 a las 5:00 am",
    likes: 5,
    count: 2,
    idParentComment: null,
  },
  {
    user: {
      idUser: 1,
      name: "Jerson Omar",
      lastname: "Ramírez Ortiz",
      birthday: "14/12/2020 a las 06:25am",
      email: "juamkoo@gmail.com",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU",
      typeUser: {
        idTypeUser: 2,
        name: "Administrador",
        sigla: "adm",
      },
    },
    idComment: 1,
    description: "Comentario",
    date: "12-06-2020 a las 5:00 am",
    likes: 5,
    count: 2,
    idParentComment: null,
  },
];

function App() {
  //   return <AppRouter />;
  return (
    <>
      <br />
      <br />
      <br />
      {comments.map((c, i) => (
        <JeComment key={i}>
          <JeComment.Avatar src={c.user.img} alt={c.user.name} />

          <JeComment.Content>
            <JeComment.MetaData
              name={c.user.name}
              typeUser={<JeTypeUser isIcon typeUser={c.user.typeUser.sigla} />}
              date={c.date}
              text={<JeComment.Text>{c.description}</JeComment.Text>}
            />
            <JeComment.Action isLike />
          </JeComment.Content>
        </JeComment>
      ))}
      <JeComment.Box />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
