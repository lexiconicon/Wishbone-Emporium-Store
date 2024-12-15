
import { Form, InputGroup, ListGroup } from 'react-bootstrap'


function SearchBar({items, searchTerm, setSearchTerm}) {

  const searchResults = items?.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (

    <div className='d-flex align-items-center'>
      <div className='me-3'>
        <Form.Label>Search:</Form.Label>
        <InputGroup className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Search for book titles'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          {/* it was constantly showing the list so this makes it so that the list
          only shows when the user types something in */}
        {searchTerm && (
            <ListGroup className='mb-3'>
            {searchResults.map(item => (
              <ListGroup.Item key={item.id} action>
                {item.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
       )}
      </div>
    </div>

  )
}

export default SearchBar
