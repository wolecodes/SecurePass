
function littlepassword(lengthOPassword){
    const charset = [
        'abcdefghijklmnopqrstuvwxyz',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '0123456789',
        '!@#$%^&*()-_=+'
      ].join('');
    let pass = " "
    for(let i = 0; i < lengthO; i++){
        const characterindex = Math.floor(Math.random() * charset.length);
        pass += charset[characterindex]
    }

    return pass
}