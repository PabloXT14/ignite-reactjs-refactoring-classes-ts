import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import { api } from '../../services/api';
import { Food } from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';

interface FoodsFormat {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

// interface DashboardProps {
//   foods: Array<{
//     id: number;
//     name: string;
//     description: string;
//     price: string;
//     available: boolean;
//     image: string;
//   }>;
//   editingFood: Object;
//   modalOpen: boolean;
//   editModalOpen: boolean;
// }

function Dashboard() {
  const [foods, setFoods] = useState<FoodsFormat[]>([]);
  const [editingFood, setEditingFood] = useState<FoodsFormat>({} as FoodsFormat);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     foods: [],
  //     editingFood: {},
  //     modalOpen: false,
  //     editModalOpen: false,
  //   }
  // }

  // async componentDidMount() {
  //   const response = await api.get('/foods');

  //   this.setState({ foods: response.data });
  // }

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await api.get('/foods');

      setFoods(response.data);
    }
    fetchMyAPI();
  }, []);



  const handleAddFood = async (food: FoodsFormat) => {
    try {
      const response = await api.post('/foods', {
        ...food,
        availabe: true
      });

      setFoods([...foods, response.data]);

    } catch (err) {
      console.log(err);
    }
  }
  // handleAddFood = async food => {
  //   const { foods } = this.state;

  //   try {
  //     const response = await api.post('/foods', {
  //       ...food,
  //       available: true,
  //     });

  //     this.setState({ foods: [...foods, response.data] });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const handleUpdateFood = async (food: FoodsFormat) => {
    try {
      const foodUpdate = await api.put(
        `/foods/${editingFood.id}`,
        { ...editingFood, ...food }
      );

      const foodsUpdated = foods.map(f =>
        f.id !== foodUpdate.data.id ? f : foodUpdate.data);

      setFoods(foodsUpdated);

    } catch (err) {
      console.log(err);
    }
  }
  // handleUpdateFood = async food => {
  //   const { foods, editingFood } = this.state;

  //   try {
  //     const foodUpdated = await api.put(
  //       `/foods/${editingFood.id}`,
  //       { ...editingFood, ...food },
  //     );

  //     const foodsUpdated = foods.map(f =>
  //       f.id !== foodUpdated.data.id ? f : foodUpdated.data,
  //     );

  //     this.setState({ foods: foodsUpdated });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const handleDeleteFood = async (id: number) => {
    await api.delete(`/foods/${id}`);
    const foodsFiltered = foods.filter(food => food.id !== id);
    setFoods(foodsFiltered);
  }
  // handleDeleteFood = async id => {
  //   const { foods } = this.state;

  //   await api.delete(`/foods/${id}`);

  //   const foodsFiltered = foods.filter(food => food.id !== id);

  //   this.setState({ foods: foodsFiltered });
  // }

  const toggleModal = () => {
    // const { modalOpen } = this.state;
    // this.setState({ modalOpen: !modalOpen });
    setModalOpen(!modalOpen);
  }

  const toggleEditModal = () => {
    // const { editModalOpen } = this.state;
    // this.setState({ editModalOpen: !editModalOpen });

    setEditModalOpen(!editModalOpen);
  }

  const handleEditFood = (food: FoodsFormat) => {
    // this.setState({ editingFood: food, editModalOpen: true });

    setEditingFood(food);
    setEditModalOpen(true);
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );

};

export default Dashboard;
