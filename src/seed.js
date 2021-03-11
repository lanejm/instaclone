export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'ETYO9aTP3AWBEk8f5CemM9fSHel2',
        username: 'dwight',
        fullName: 'Dwight Schrute',
        emailAddress: 'dwight@dundermifflin.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'Ron',
        fullName: 'Ron Swanson',
        emailAddress: 'ron@pawnee.gov',
        following: [],
        followers: ['ETYO9aTP3AWBEk8f5CemM9fSHel2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'Pepperwood',
        fullName: 'Julius Pepperwood',
        emailAddress: 'julius@pepperwood.com',
        following: [],
        followers: ['ETYO9aTP3AWBEk8f5CemM9fSHel2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'Dave',
        fullName: 'Dave Grohl',
        emailAddress: 'dave@foofighters.com',
        following: [],
        followers: ['ETYO9aTP3AWBEk8f5CemM9fSHel2'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/src/images/users/ron/${i}.jpg`,
          caption: 'Love this!',
          likes: [],
          comments: [
            {
              displayName: 'Pepperwood',
              comment: 'Looks good!'
            },
            {
              displayName: 'Dave',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
  