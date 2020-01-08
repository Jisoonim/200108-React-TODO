import axios from 'axios'

//화면에 안뿌려지는건 파일앞에 소문자를 사용

export const doA = () => {
    console.log("doA")

}

export const addToServer = async (title,targetDate) => { //async : 비동기화

    const result = await axios.post('http://10.10.10.132:8080/todos/', {title,targetDate})
    .then((response, error) => {

        return response
    })

    return result
}

export const getServerData = async (page) => {
    let res;

    await axios.get('http://10.10.10.132:8080/todos/list?page=' + (page || 1) ) //서버 ip 연결
    .then((response, error) => {

        console.log("1--------------------------")

        res = {content: response.data.content,
                pageInfo: response.data.pageable}

    })

    console.log("2--------------------------")
    
    return res;

}