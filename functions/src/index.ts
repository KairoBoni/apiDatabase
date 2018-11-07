import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';




admin.initializeApp(functions.config().firebase)
admin.firestore().settings({
    timestampsInSnapshots: true
})
export const setDataCloud = functions.https.onRequest(async (request, response) => {
    const {
        collection,
        someKey,
        value
    } = request.query;

    try {
        await admin.firestore().collection(collection).doc(someKey).set({
            value: value
        });
        console.log('Done.')
    } catch (error) {
        console.log('Some Error')
    }
    response.end();
});

export const googleLogin = functions.https.onRequest((request, response) => {
    console.log("login");
    response.end();
})