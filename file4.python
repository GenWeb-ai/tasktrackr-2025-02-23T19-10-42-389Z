from flask import Flask, jsonify, request

app = Flask(__name__)

todos = []

@app.route('/api/todos', methods=['GET'])
def get_todos():
    return jsonify(todos)

@app.route('/api/todos', methods=['POST'])
def add_todo():
    todo = request.json.get('todo')
    if todo:
        todos.append(todo)
        return jsonify({'message': 'Todo added successfully'}), 201
    return jsonify({'error': 'Invalid input'}), 400

@app.route('/api/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    if 0 <= todo_id < len(todos):
        todos.pop(todo_id)
        return jsonify({'message': 'Todo deleted successfully'}), 200
    return jsonify({'error': 'Todo not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)