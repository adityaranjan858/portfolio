
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PROJECTS_API_KEY } from '../../utils/constants';

// fetch projects
export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
    try {
        const response = await axios.get(PROJECTS_API_KEY)
        return response.data
    } catch (error) {
        console.log(error);
    }
})

// add projects
export const addProject = createAsyncThunk("projects/add", async (project) => {
    try {
        const response = await axios.post(PROJECTS_API_KEY, project)
        return response.data
    } catch (error) {
        console.log(error);
    }
})

// Edit projects
export const updateProject = createAsyncThunk("projects/edit", async (updatedProject) => {
    try {
        const response = await axios.put(`${PROJECTS_API_KEY}/${updatedProject.id}`, updatedProject)
        return response.data
    }catch(error){
        console.log(error) 
    }

})


// Delete Projects
export const deleteProject = createAsyncThunk("projects/delete", async (id) => {
    try {
        const response = await axios.delete(`${PROJECTS_API_KEY}/${id}`)
        return response.data
    }catch(error){
        console.log(error) 
    }

})

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        isLoading: false,
        error: null,
        projects: [],
        isVisible : false

    },
    reducers: {
        toggle: (state) => {
            state.isVisible = !state.isVisible
        }
    },
    extraReducers: (builder) => {
        builder
        // fetch project
        .addCase(fetchProjects.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(fetchProjects.fulfilled, (state, action) => {
            state.projects = action.payload
            state.isLoading = false
            state.error = null
        })
        .addCase(fetchProjects.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })


        // add project
        .addCase(addProject.fulfilled, (state, action) => {
            state.projects.push(action.payload)
        })

        // update project
        .addCase(updateProject.fulfilled, (state, action) => {
            state.projects = state.projects.map(item => item.id === action.payload.id ? action.payload : item)
                
        })

        // delete project
        .addCase(deleteProject.fulfilled, (state, action) => {
            const index = state.projects.findIndex(s => s.id === action.payload.id)
            if(index !== -1){
                state.projects.splice(index, 1)
            }
        })
    }
})

export const { toggle } = projectsSlice.actions
export default projectsSlice.reducer;    