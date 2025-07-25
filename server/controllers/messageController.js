import Message from "../models/Message.js";
import User from "../models/User.js";

//get all users except logged in users

export const getUsersForSidebar = async (req, res) => {
  try {
    const userId = req.user_id;
    const filteredUsers = await User.find({ _id: { $ne: userId } }).select(
      "-password"
    );

    //count number of unseen messages
    const unseenMessages = filteredUsers.map(async (user) => {
      const messages = await Message.find({
        senderId: user._id,
        receiverId: userId,
        seen: false,
      });
      if(messages.length>0){
        unseenMessages[user._id]=messages.length;
      }
    });
    await Promise.all(promises);
    res.json({success:true , users: filteredUsers, unseenMessages})
  } catch (error) {
    console.log(error.message);
    res.json({success:false , message:error.message})
  }
};


// get all messages for selected user

export const getMessages= async(req,res)=>{
    try{
        const {id:selectedUserId} = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or:[
                {senderId: myId, receiverId:selectedUserId},
                {senderId: selectedUserId, receiverId:myId}
            ]
        })
        await Message.updateMany({senderId: selectedUserId, receiverId:myId},{seen:true});
    }
    catch (error) {
    console.log(error.message);
    res.json({success:false , message:error.message})
  }
}