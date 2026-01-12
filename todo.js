class Todo{
    constructor(){
        this.text = document.querySelector("#write");
        this.addBtn = document.querySelector("#btn_add");
        this.ul = document.querySelector("ul");

        this.addBtn.addEventListener("click", () => {
            this.checkTask();
        });
    }

    checkTask(){
        this.taskVal = this.text.value.trim();
        if(!this.taskVal){
            window.alert("Please enter the task");
            return;
        }
        this.addTask();
    }

    addTask(){
        let li = document.createElement("li");
        li.classList.add("list");

        let div = document.createElement("div");
        div.classList.add("inner");
        div.textContent = this.taskVal;
        li.append(div);

        //For Deleting items
        let delBtn = document.createElement("button");
        delBtn.classList.add("delete");
        delBtn.innerHTML = '<i class="ri-delete-bin-6-line"></i>';
        li.append(delBtn);

        delBtn.addEventListener("click", () => {
            li.remove();
        });
        
        //For Marking items
        let markBtn = document.createElement("Button");
        markBtn.classList.add("mark");
        markBtn.innerHTML = '<i class="ri-check-double-line"></i>';
        li.append(markBtn);

        markBtn.addEventListener("click", () => {
            div.classList.add("hide");
            markBtn.disabled = true;
        });

        this.ul.append(li);
        this.text.value = "";
    }
}

new Todo();