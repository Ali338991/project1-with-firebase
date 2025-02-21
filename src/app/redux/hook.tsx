import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState,AppDispatch } from '../components/store'
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()