function mapTime(time = 0){

    var timeNow = Date.now();
    var timeCreat = parseInt(timeNow - time);
    var timeSecons = timeCreat/1000;
    if((timeSecons > 0) && (timeSecons < 60)){
        return `${timeSecons} Giây trước`;
    }else{
        if((timeSecons > 60) && (timeSecons < 3600)){
            var minute = Math.floor(timeSecons/60);
            return `${minute} Phút trước`;
        }else{
            if((timeSecons >=3600) && (timeSecons < 86400)){
                var hour = Math.floor(timeSecons/(60*60));
            return `${hour} Giờ trước`;
        }else{
            if((timeSecons >= 86400) && (timeSecons < 2592000)){
                var date = Math.floor(timeSecons/(60*60*24));
                return `${date} Ngày trước`;
            }else{
                if((timeSecons >= 2592000) && (timeSecons < 31104000)){
                var month = Math.floor(timeSecons/(60*60*24*30));
                return `${month} Tháng trước`;
            }else{
                if(timeSecons >= 31104000){
                var year = Math.floor(timeSecons/(60*60*24*365));
                return `${year} Năm trước`;
          }
      }
    }
  }
}
}
} 
export default mapTime;