import React, { useCallback, useEffect, useState } from "react";
import { v1 } from "uuid";
import JeComment, {
  Box,
  Loading,
} from "../../../../../../components/common/JeComment";
import widthCommentContext from "../../../../../../hoc/withComment";
import useCommentContext from "../../../../../../hooks/useCommentContext";

const userGlobal = {
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
};

const Comment = ({ idAppointment }) => {
  const [loading, setloading] = useState(true);
  const {
    comments,
    setComments,
    addUpdateLike,
    addComment,
  } = useCommentContext();

  useEffect(() => {
    //llamada a la api para obtener todos los comentarios...
    const idTime = setTimeout(() => {
      setComments(commentss);
      setloading(false);
    }, 1000);
    return () => {
      clearTimeout(idTime);
    };
  }, [setComments]);

  const handleLike = useCallback(
    (idComment) => {
      //tenemos que hacer la llamada a la api para actualiar el like con la bd
      addUpdateLike(idComment, userGlobal.idUser);
    },
    [addUpdateLike]
  );

  const handleSubmit = useCallback((txt, settext) => {
    // console.log(txt);
    //enviar al backend y de acuerdo a la respuesta, hacer algo...
    settext("");
    addComment({
      user: userGlobal,
      idComment: v1(),
      description: txt,
      date: "12-06-2020 a las 5:00 am",
      likes: 0,
      ilike: false,
      idParentComment: null,
    });
  }, []);

  return (
    <div className="appointment-scene-drawercomment">
      <Loading count={4} show={loading} />
      {!loading && (
        <>
          {comments.map((c, i) => (
            <JeComment
              key={c.idComment}
              user={{
                name: c.user.name,
                img: c.user.img,
                typeUser: c.user.typeUser.sigla,
              }}
              date={c.date}
              text={c.description}
              id={c.idComment}
              ilike={c.ilike}
              countLikes={c.likes}
              action={{
                isLike: true,
                handleLike: handleLike,
              }}
            />
          ))}
          <Box
            handleSubmit={handleSubmit}
            img={userGlobal.img}
            href={userGlobal.name}
            name={userGlobal.name}
          />
        </>
      )}
    </div>
  );
};

const commentss = [
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
    ilike: true,
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
    idComment: 2,
    description: "Comentario",
    date: "12-06-2020 a las 5:00 am",
    likes: 5,
    ilike: false,
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
    idComment: 3,
    description: "Comentario",
    date: "12-06-2020 a las 5:00 am",
    likes: 5,
    ilike: false,
    idParentComment: null,
  },
];

export default widthCommentContext(Comment);
