import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Commen/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import userPhoto from "../../../assets/images/user.png";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.userProfile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    console.log(formData);
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      {/* <div>
        <img
          src="https://s.w-x.co/util/image/w/de-winter-sonne-GettyImages-1299419125%20Kopie.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
          alt="logo"
        />
      </div> */}
      <div className={s.descriptionBlock}>
        <div>{props.userProfile.userId}</div>
        <img
          src={props.userProfile.photos.large || userPhoto}
          alt="logo"
          className={s.mainPhoto}
        />
        {props.isOwner && (
          <input type={"file"} onChange={onMainPhotoSelected} />
        )}
        {editMode ? (
          <ProfileDataForm
            onSubmit={onSubmit}
            initialValues={props.userProfile}
            userProfile={props.userProfile}
          />
        ) : (
          <ProfileData
            userProfile={props.userProfile}
            isOwner={props.isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}

        {/* <ProfileStatus status="Hallo!" /> */}
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

const ProfileData = ({ userProfile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div>{isOwner && <button onClick={goToEditMode}>edit</button>}</div>
      <div>
        <b>Full name</b>: {userProfile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>:{userProfile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>My professional skills </b>:{userProfile.lookingForAJobDescription}
      </div>
      <div>
        <b>AboutMe</b>: {userProfile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(userProfile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={userProfile.contacts[key]}
            />
          );
        })}
      </div>
      {/* <div>{props.userProfile.contacts.facebook}</div>
  <div>{props.userProfile.contacts.website}</div>
  <div>{props.userProfile.contacts.vk}</div>
  <div>{props.userProfile.contacts.twitter}</div>
  <div>{props.userProfile.contacts.instagram}</div>
  <div>{props.userProfile.contacts.youtube}</div>
  <div>{props.userProfile.contacts.github}</div>
  <div>{props.userProfile.contacts.mainLink}</div> */}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
