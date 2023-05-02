

function App() {
  return (
    <div className="bg-gray-500">
      
      <div class="container">


        <button class="bg-blue-500 hover:bg-blue-200 text-pink font-bold py-2 px-4 rounded">Find Friend</button>
        <button class="btn btn-blue">Find Groups</button>
      
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 roundedrelative my-5" role="alert">
         
          <strong class="font-bold">Alert!</strong>
          <span class="block sm-inline">Please Update your password</span>

        </div>

      </div>
      <div class="flex">
      <div class="max-w-sm mx-auto flex p-6 bg-white rounded shadow-xl">
        <div class="flex-shrink-0">
          <img src="https://i.pinimg.com/736x/92/a6/2f/92a62f0221f58fe503a15fcb13f5c107--tom-jerry-movies-.jpg" alt="cartoon" class="h-40 w-40"/>
          
        </div>
        <div class="ml-6 pt-1">
          <h4 class="text-xl text-gray-900">Hello!! I am Tom</h4>
        </div>

      </div>
      <div class="max-w-sm mx-auto flex p-6 bg-white rounded shadow-xl">
        <div class="flex-shrink-0">
          <img src="https://i.pinimg.com/originals/f4/ed/18/f4ed18e4f8c07a1688153de9daa5bd6c.jpg" alt="cartoon" class="h-40 w-40"/>
          
        </div>
        <div class="ml-6 pt-1">
          <h4 class="text-xl text-gray-900">Hello!! I am Jeery</h4>
        </div>

      </div>

      </div>
      


      
    </div>




  );
}

export default App;
