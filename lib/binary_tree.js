/**
 * Реализует хранение бинарного дерева
 * 
 * @param {string} name
 *   Имя корневого узла
 * @param {string} data
 *   Значение корневого узла
 * @returns {object}
 *   Бинарное дерево
 */
function BinaryTree(name, data) {
    var self = this; // Текущий узел
    var root;        // Корневой узел
    var names = [];  // Уникальные имена узлов
    if (name === undefined || data === undefined) {
        throw new Error('Не задан корневой узел или его значение');
    } else {
        var root = new BinaryTreeNode(name, data);
        names.push(name);
    }

    /**
     * Реализует хранение в бинарного дерева
     * 
     * @param {string} child
     *   Имя дочернего узла
     * @param {type} data
     *   Данные в узле
     * @returns {BinaryTree.BinaryTreeNode}
     *   Бинарный узел
     */
    function BinaryTreeNode(child, data) {
        var nameNode, dataNode, leftNode, rightNode;
        nameNode = child;
        dataNode = data;
        this.name = nameNode;   // Имя узла
        this.data = dataNode;   // Данные в узле
        this.left = leftNode;   // Левый дочерний узел
        this.right = rightNode; // Правый дочерний узел
    }

    /**
     * Реализует хранение узла в бинарном дереве
     * 
     * @param {string} parent
     *   НИмя родительского узла
     * @param {string} child
     *   Имя дочернего узла
     * @param {type} data
     *   Данные в узле
     */
    self.add = function (parent, child, data) {
        if (names.indexOf(child) === -1) {
            var node = self.search(parent);
            if (node !== null) {
                if (node.left === undefined) {
                    node.left = new BinaryTreeNode(child, data);
                } else if (node.right === undefined) {
                    node.right = new BinaryTreeNode(child, data);
                } else {
                    throw new Error('Невозможно добавить более двух дочерних узлов');
                }
            }
            names.push(child);
        } else {
            throw new Error('Добавляемый узел должен быть уникальным');
        }
    };

    /**
     * Реализует поиск узла по уникальному имени
     * 
     * @param {string} name
     *   Имя узла, который надо найти
     * @param {string} node
     *   Текущий узел
     * @returns {BinaryTreeNode}
     *   Найденный бинарный узел
     */
    self.search = function (name, node = root) {
        var node, result = null, childLeft, childRight;
        if (node && node.name === name) {
            result = node;
        } else if (node.left !== undefined || node.right !== undefined) {
            if (node.left !== undefined && node.left instanceof BinaryTreeNode) {
                childLeft = self.search(name, node.left);
                if (childLeft !== null) {
                    result = childLeft;
                }
            }
            if (node.right !== undefined && node.right instanceof BinaryTreeNode) {
                childRight = self.search(name, node.right);
                if (childRight !== null) {
                    result = childRight;
                }
            }
        }
		
        return result;
    };

    /**
     * Получение корневого узла
     * 
     * @returns {node}
     *   Корневой узел
     */
    self.root = function () {
		
        return root;
    };
}

/**
 * Выполняем действия когда DOM полностью загружен
 */
jQuery(document).ready(function () {
	
	//    var tree = new BinaryTree('A', 10);
	//    tree.add('A', 'B', 6);
	//    tree.add('A', 'C', 14);
	//    tree.add('B', 'D', 5);
	//    tree.add('B', 'E', 8);
	//    tree.add('C', 'F', 11);
	//    tree.add('C', 'G', 18);
	//    console.log(tree.root());

    var tree = new BinaryTree('A', 99);
    tree.add('A', 'B', 13);
    tree.add('A', 'C', 67);
    tree.add('B', 'D', 19);
    tree.add('B', 'E', 31);
    tree.add('C', 'F', 26);
    tree.add('C', 'G', 12);
    
    console.log(tree.root());
});