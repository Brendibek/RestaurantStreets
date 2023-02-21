function cacheComplete(modelID)
{  
    window['activeScenes'][modelID]['cachingIntervals'] = "completed";   
}
function rotateY(modelID, rotation)
{
    window['rotationAvatar'](modelID, rotation);
}

function initObjects(_params)
{
	console.log(_params);
    var userItems = _params['itemIDs'].split(",");
    var avatarItems = [0,0,0,0,0,0,0,0,0,0,0,0];   
    for(var i in userItems)
    {
        var itemID = userItems[i];
        if(!itemID) continue;
        var itemGroup = getItemGroup(itemID);
        switch(itemGroup)
        {
            case 'SkinColour': avatarItems[0] = avatarItems[0] == 0 ? itemID : avatarItems[0]; break;
            case 'HairColour': avatarItems[1] = avatarItems[1] == 0 ? itemID : avatarItems[1]; break;
            case 'Eyes': avatarItems[2] = avatarItems[2] == 0 ? itemID : avatarItems[2]; break;
            case 'Mouth': avatarItems[3] = avatarItems[3] == 0 ? itemID : avatarItems[3]; break;
            case 'Pants': avatarItems[4] = avatarItems[4] == 0 ? itemID : avatarItems[4]; break;
            case 'Skirt': avatarItems[5] = avatarItems[5] == 0 ? itemID : avatarItems[5]; break;
            case 'Shirt': avatarItems[6] = avatarItems[6] == 0 ? itemID : avatarItems[6]; break;
            case 'Hat': avatarItems[7] = avatarItems[7] == 0 ? itemID : avatarItems[7]; break;
            case 'Hair': avatarItems[8] = avatarItems[8] == 0 ? itemID : avatarItems[8]; break;
            case 'Facial Hair': avatarItems[9] = avatarItems[9] == 0 ? itemID : avatarItems[9]; break;
            case 'Miscellaneous': avatarItems[10] = avatarItems[10] == 0 ? itemID : avatarItems[10]; break;
            case 'Eyebrows': avatarItems[11] = avatarItems[11] == 0 ? itemID : avatarItems[11]; break;
        }
    }  
    
    var modelInfo = {
        'cachingStatus' : 'makingTexture',
        'cachingMode' : _params['cachingMode'],
        'avatarItems' : avatarItems,
        'cachedFrames': 0,
        'isSingleFrame': _params['isSingleFrame'],
        'isometric' : _params['isometric'],
        'isCurrentGameUser' : _params['isCurrentGameUser'],
        'firstSet' : typeof(window['activeScenes'][_params['modelID']]) == 'undefined'
    };
   
    window['activeScenes'][_params['modelID']] = modelInfo;    
    window['setAvatarFields'](_params['modelID']);
}

function refreshObjects(itemIDs, modelID)
{   
    var userItems = itemIDs.split(",");    
    var avatarItems = [0,0,0,0,0,0,0,0,0,0,0,0];
    for(var i in userItems)
    {
        var itemID = userItems[i];
        if(!itemID) continue;
        var itemGroup = getItemGroup(itemID);
        switch(itemGroup)
        {
            case 'SkinColour':
                avatarItems[0] = itemID;
            break;
            case 'HairColour':
                avatarItems[1] = itemID;
            break;
            case 'Eyes':
                avatarItems[2] = itemID;
            break;
            case 'Mouth':
                avatarItems[3] = itemID;
            break;
            case 'Pants':
                avatarItems[4] = itemID;
            break;
            case 'Skirt':
                avatarItems[5] = itemID;
            break;
            case 'Shirt':
                avatarItems[6] = itemID;
            break;
            case 'Hat':
                avatarItems[7] = itemID;
            break;
            case 'Hair':
                avatarItems[8] = itemID;
            break;
            case 'Facial Hair':
                avatarItems[9] = itemID;
            break;
            case 'Miscellaneous':
                avatarItems[10] = itemID;
            break;
            case 'Eyebrows':
                avatarItems[11] = itemID;
            break;
        }        
    } 
    window['activeScenes'][modelID]['avatarItems'] = avatarItems;
    window['setAvatarFields'](modelID);
}


function getItemGroup(itemID)
{
    var database = window['databaseItems'];
    for(var i = 0; i < database.groups.length; i++) 
    {   
        var currGroup =  database.groups[i];
        for(let j = 0; j < currGroup.items.length; j++) 
        { 
            if(currGroup.items[j].id == itemID)
            {
                return  currGroup.groupName;
            }
        }       
    }
}

function playAnimation(modelID, clipName, countPlay, queneAnimations)
{	
    var _queneAnimations = typeof(queneAnimations[0]) == 'undefined' ? [] : queneAnimations;
    window['playAnimationClip'](modelID, clipName, countPlay, _queneAnimations, false);
}