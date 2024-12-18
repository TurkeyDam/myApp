import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {

    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister');

    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color = {'primary'}>
                    <IonButtons slot="start"></IonButtons>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
                            <IonInput fill="outline" labelPlacement="floating" label="First name" type="text" placeholder="Ex: John" />
                            <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Last name" type="text" placeholder= "Ex: Legend" />
                            <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="example@gmail.com"></IonInput>
                            <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" placeholder="Must have at least 8 characters"></IonInput>
                            <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Confirm Password" type="password" placeholder=""></IonInput>
                            <IonButton type="submit" expand="block" className="ion-margin-top" color={'tertiary'}>
                                Create my account
                                <IonIcon icon={checkmarkDoneOutline} slot="end"/>
                            </IonButton>
            
                            
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <IonFooter>
                <IonToolbar></IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Register;