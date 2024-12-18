import { IonContent, IonHeader, IonPage, IonFooter, IonTitle, IonToolbar, IonCard, IonCardContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import MyApp from '../assets/MyApp.svg';


const Login: React.FC = () => {
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                
                    <IonTitle>MyApp</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>            
                <div className="ion-text-center ion-padding">
                    <img src={MyApp} alt='MyApp logo' width={'50%'}/>
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="example@gmail.com"></IonInput>
                            <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password"></IonInput>
                            <IonButton type="submit" expand="block" className="ion-margin-top" color={'tertiary'}>
                                Login
                                <IonIcon icon={logInOutline} slot="end"/>
                            </IonButton>
                            <IonButton routerLink="/register" type="button" expand="block" className="ion-margin-top" color={'secondary'}>
                                Create Account
                                <IonIcon icon={personCircleOutline} slot="end"/>
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

export default Login; 