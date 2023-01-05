// ** Router Import
import Router from './router/Router'

// ** React Query Import
import { QueryClientProvider, QueryClient } from 'react-query'

const client = new QueryClient({})

const App = () => (
    <QueryClientProvider client={client}>
        <Router />
    </QueryClientProvider>
)

export default App
