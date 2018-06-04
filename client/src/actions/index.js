const API_URL = 'http://localhost:3001/api'

// Action Creators
export const setTrails = trails => {
  return {
    type: 'GET_TRAILS',
    trails
  }
}

export const setTrail = trail => {
  return {
    type: 'GET_TRAIL',
    trail
  }
}

export const addTrail = trail => {
  debugger
  return {
    type:'ADD_TRAIL',
    trail
  }
}

export const removeTrail = trail => {
  return {
    type: 'REMOVE_TRAIL',
    trail
  }
}

export const addLikes = trail => {
  return {
    type: 'LIKE_TRAIL',
    trail
  }
}

export const updateTrail = trail => {
  return {
    type: 'EDIT_TRAIL',
    trail
  }
}

// Async actions
export const getTrails= () => {
  return dispatch => {
    return fetch(`${API_URL}/trails`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(trails => {
      dispatch(setTrails(trails))
    })
    .catch(error => console.log(error));
  }
}

export const fetchTrail = (trailId) => {
	return dispatch => {
		return fetch(`${API_URL}/trails/${trailId}`)
			.then(response => response.json())
			.then(trail => {
				dispatch(setTrail(trail));
			})
			.catch(error => console.log(error));
	}
}

export const createTrail = (trail, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/trails`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({trail: trail})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(trail => {
      dispatch(addTrail(trail))
      routerHistory.replace(`/trails/${trail.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace('/trails/new');
     })
  }
}

export const editTrail = (trail, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/trails/${trail.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({trail: trail})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(trail => {
      dispatch(updateTrail(trail))
      routerHistory.replace(`/trails/${trail.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace('/trails');
     })
  }
}

export const deleteTrail = (trailId, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/trails/${trailId}`, {
      method: "DELETE",
    })
    .then(response => {
      routerHistory.replace('/trails');
      dispatch(removeTrail(trailId));
    })
    .catch(error => console.log(error))
  }
}

export const likeTrail = (trail) => {
  debugger
  return dispatch => {
    return fetch(`${API_URL}/trails/${trail.id}`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({trail: Object.assign(...trail, { likes: trail.likes + 1 })})
      })
      .then(response => response.json())
      .then(trail => {

        dispatch(addLikes(trail))
      })
    .catch(error => console.log(error))
  }
}

function handleErrors(response){
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
