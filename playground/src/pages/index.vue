<template>
  <div class="page page-pet-store">
    <div class="page-content">
      <h1>Pet Store API 示例</h1>

      <!-- Pet 相关操作 -->
      <section class="api-section">
        <h2>Pet 管理</h2>

        <div class="api-group">
          <h3>查找宠物</h3>
          <div class="form-group">
            <label>状态:</label>
            <select v-model="petStatus" @change="findPetsByStatus">
              <option value="">请选择状态</option>
              <option value="available">可用</option>
              <option value="pending">待定</option>
              <option value="sold">已售</option>
            </select>
          </div>
          <div class="result" v-if="petsByStatus.length">
            <h4>查询结果:</h4>
            <div class="pet-list">
              <div v-for="pet in petsByStatus" :key="pet.id" class="pet-item">
                <img v-if="pet.photoUrls && pet.photoUrls[0]" :src="pet.photoUrls[0]" :alt="pet.name" class="pet-image">
                <div class="pet-info">
                  <h5>{{ pet.name }}</h5>
                  <p>状态: {{ pet.status }}</p>
                  <p>分类: {{ pet.category?.name || '未分类' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="api-group">
          <h3>根据ID获取宠物</h3>
          <div class="form-group">
            <label>宠物ID:</label>
            <input type="number" v-model="petId" placeholder="输入宠物ID">
            <button @click="getPetById" :disabled="!petId">获取宠物</button>
          </div>
          <div class="result" v-if="selectedPet">
            <h4>宠物详情:</h4>
            <div class="pet-detail">
              <img v-if="selectedPet.photoUrls && selectedPet.photoUrls[0]" :src="selectedPet.photoUrls[0]" :alt="selectedPet.name" class="pet-image">
              <div class="pet-info">
                <h5>{{ selectedPet.name }}</h5>
                <p>ID: {{ selectedPet.id }}</p>
                <p>状态: {{ selectedPet.status }}</p>
                <p>分类: {{ selectedPet.category?.name || '未分类' }}</p>
                <p>标签: {{ selectedPet.tags?.map(tag => tag.name).join(', ') || '无' }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="api-group">
          <h3>添加新宠物</h3>
          <div class="form-group">
            <label>宠物名称:</label>
            <input type="text" v-model="newPet.name" placeholder="宠物名称">
          </div>
          <div class="form-group">
            <label>状态:</label>
            <select v-model="newPet.status">
              <option value="available">可用</option>
              <option value="pending">待定</option>
              <option value="sold">已售</option>
            </select>
          </div>
          <div class="form-group">
            <label>分类:</label>
            <input type="text" v-model="newPet.category" placeholder="分类名称">
          </div>
          <button @click="addPet" :disabled="!newPet.name">添加宠物</button>
        </div>
      </section>

      <!-- Store 相关操作 -->
      <section class="api-section">
        <h2>Store 管理</h2>

        <div class="api-group">
          <h3>获取库存信息</h3>
          <button @click="getInventory">获取库存</button>
          <div class="result" v-if="inventory">
            <h4>库存信息:</h4>
            <div class="inventory-list">
              <div v-for="(count, status) in inventory" :key="status" class="inventory-item">
                <span class="status">{{ status }}:</span>
                <span class="count">{{ count }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="api-group">
          <h3>下订单</h3>
          <div class="form-group">
            <label>宠物ID:</label>
            <input type="number" v-model="order.petId" placeholder="宠物ID">
          </div>
          <div class="form-group">
            <label>数量:</label>
            <input type="number" v-model="order.quantity" placeholder="数量" min="1">
          </div>
          <div class="form-group">
            <label>订单状态:</label>
            <select v-model="order.status">
              <option value="placed">已下单</option>
              <option value="approved">已批准</option>
              <option value="delivered">已交付</option>
            </select>
          </div>
          <button @click="placeOrder" :disabled="!order.petId || !order.quantity">下订单</button>
          <div class="result" v-if="placedOrder">
            <h4>订单信息:</h4>
            <div class="order-detail">
              <p>订单ID: {{ placedOrder.id }}</p>
              <p>宠物ID: {{ placedOrder.petId }}</p>
              <p>数量: {{ placedOrder.quantity }}</p>
              <p>状态: {{ placedOrder.status }}</p>
              <p>下单时间: {{ new Date(placedOrder.shipDate).toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- User 相关操作 -->
      <section class="api-section">
        <h2>User 管理</h2>

        <div class="api-group">
          <h3>用户登录</h3>
          <div class="form-group">
            <label>用户名:</label>
            <input type="text" v-model="loginForm.username" placeholder="用户名">
          </div>
          <div class="form-group">
            <label>密码:</label>
            <input type="password" v-model="loginForm.password" placeholder="密码">
          </div>
          <button @click="loginUser" :disabled="!loginForm.username || !loginForm.password">登录</button>
          <div class="result" v-if="loginResult">
            <h4>登录结果:</h4>
            <p>{{ loginResult.success ? '登录成功' : '登录失败' }}</p>
            <p v-if="loginResult.token">Token: {{ loginResult.token }}</p>
          </div>
        </div>

        <div class="api-group">
          <h3>创建用户</h3>
          <div class="form-group">
            <label>用户名:</label>
            <input type="text" v-model="newUser.username" placeholder="用户名">
          </div>
          <div class="form-group">
            <label>邮箱:</label>
            <input type="email" v-model="newUser.email" placeholder="邮箱">
          </div>
          <div class="form-group">
            <label>密码:</label>
            <input type="password" v-model="newUser.password" placeholder="密码">
          </div>
          <button @click="createUser" :disabled="!newUser.username || !newUser.email || !newUser.password">创建用户</button>
        </div>
      </section>

      <!-- 错误信息显示 -->
      <div class="error-message" v-if="errorMessage">
        <h4>错误信息:</h4>
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import {
  findPetsByStatusAdapter,
  getPetByIdAdapter,
  addPetAdapter,
  getInventoryAdapter,
  placeOrderAdapter,
  loginUserAdapter,
  createUserAdapter
} from '@domain/domain-pet-store';

// 响应式数据
const petStatus = ref('');
const petId = ref('');
const petsByStatus = ref([]);
const selectedPet = ref(null);
const inventory = ref(null);
const placedOrder = ref(null);
const loginResult = ref(null);
const errorMessage = ref('');

// 表单数据
const newPet = reactive({
  name: '',
  status: 'available',
  category: ''
});

const order = reactive({
  petId: '',
  quantity: 1,
  status: 'placed'
});

const loginForm = reactive({
  username: '',
  password: ''
});

const newUser = reactive({
  username: '',
  email: '',
  password: ''
});

// API 调用方法
const findPetsByStatus = async () => {
  if (!petStatus.value) return;

  try {
    errorMessage.value = '';
    const [error, result] = await findPetsByStatusAdapter({ status: petStatus.value });

    if (error) {
      errorMessage.value = `查找宠物失败: ${error.message || error}`;
      return;
    }

    petsByStatus.value = result || [];
  } catch (err) {
    errorMessage.value = `查找宠物异常: ${err.message}`;
  }
};

const getPetById = async () => {
  if (!petId.value) return;

  try {
    errorMessage.value = '';
    const [error, result] = await getPetByIdAdapter({ petId: petId.value });

    if (error) {
      errorMessage.value = `获取宠物失败: ${error.message || error}`;
      return;
    }

    selectedPet.value = result;
  } catch (err) {
    errorMessage.value = `获取宠物异常: ${err.message}`;
  }
};

const addPet = async () => {
  if (!newPet.name) return;

  try {
    errorMessage.value = '';
    const petData = {
      name: newPet.name,
      status: newPet.status,
      category: newPet.category ? { name: newPet.category } : undefined
    };

    const [error, result] = await addPetAdapter(petData);

    if (error) {
      errorMessage.value = `添加宠物失败: ${error.message || error}`;
      return;
    }

    // 清空表单
    newPet.name = '';
    newPet.category = '';
    alert('宠物添加成功！');
  } catch (err) {
    errorMessage.value = `添加宠物异常: ${err.message}`;
  }
};

const getInventory = async () => {
  try {
    errorMessage.value = '';
    const [error, result] = await getInventoryAdapter({});

    if (error) {
      errorMessage.value = `获取库存失败: ${error.message || error}`;
      return;
    }

    inventory.value = result;
  } catch (err) {
    errorMessage.value = `获取库存异常: ${err.message}`;
  }
};

const placeOrder = async () => {
  if (!order.petId || !order.quantity) return;

  try {
    errorMessage.value = '';
    const orderData = {
      petId: parseInt(order.petId),
      quantity: parseInt(order.quantity),
      status: order.status
    };

    const [error, result] = await placeOrderAdapter(orderData);

    if (error) {
      errorMessage.value = `下订单失败: ${error.message || error}`;
      return;
    }

    placedOrder.value = result;
    // 清空表单
    order.petId = '';
    order.quantity = 1;
  } catch (err) {
    errorMessage.value = `下订单异常: ${err.message}`;
  }
};

const loginUser = async () => {
  if (!loginForm.username || !loginForm.password) return;

  try {
    errorMessage.value = '';
    const [error, result] = await loginUserAdapter({
      username: loginForm.username,
      password: loginForm.password
    });

    if (error) {
      errorMessage.value = `登录失败: ${error.message || error}`;
      return;
    }

    loginResult.value = result;
  } catch (err) {
    errorMessage.value = `登录异常: ${err.message}`;
  }
};

const createUser = async () => {
  if (!newUser.username || !newUser.email || !newUser.password) return;

  try {
    errorMessage.value = '';
    const userData = {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    };

    const [error, result] = await createUserAdapter(userData);

    if (error) {
      errorMessage.value = `创建用户失败: ${error.message || error}`;
      return;
    }

    // 清空表单
    newUser.username = '';
    newUser.email = '';
    newUser.password = '';
    alert('用户创建成功！');
  } catch (err) {
    errorMessage.value = `创建用户异常: ${err.message}`;
  }
};
</script>

<style lang="less" scoped>
.page-pet-store {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  .page-content {
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
    }

    .api-section {
      margin-bottom: 40px;
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background: #fafafa;

      h2 {
        color: #2c3e50;
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
        margin-bottom: 20px;
      }

      .api-group {
        margin-bottom: 30px;
        padding: 15px;
        background: white;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);

        h3 {
          color: #34495e;
          margin-bottom: 15px;
        }

        .form-group {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;

          label {
            min-width: 80px;
            font-weight: 500;
          }

          input, select {
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            flex: 1;
            max-width: 200px;
          }
        }

        .result {
          margin-top: 15px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 4px;
          border-left: 4px solid #28a745;

          h4 {
            color: #28a745;
            margin-bottom: 10px;
          }

          .pet-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;

            .pet-item {
              display: flex;
              align-items: center;
              padding: 10px;
              background: white;
              border-radius: 6px;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1);

              .pet-image {
                width: 60px;
                height: 60px;
                object-fit: cover;
                border-radius: 4px;
                margin-right: 10px;
              }

              .pet-info {
                h5 {
                  margin: 0 0 5px 0;
                  color: #2c3e50;
                }

                p {
                  margin: 2px 0;
                  font-size: 12px;
                  color: #7f8c8d;
                }
              }
            }
          }

          .pet-detail {
            display: flex;
            align-items: flex-start;
            gap: 15px;

            .pet-image {
              width: 100px;
              height: 100px;
              object-fit: cover;
              border-radius: 6px;
            }

            .pet-info {
              h5 {
                margin: 0 0 10px 0;
                color: #2c3e50;
              }

              p {
                margin: 5px 0;
                color: #34495e;
              }
            }
          }

          .inventory-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 10px;

            .inventory-item {
              display: flex;
              justify-content: space-between;
              padding: 8px 12px;
              background: white;
              border-radius: 4px;
              border: 1px solid #e0e0e0;

              .status {
                font-weight: 500;
                color: #2c3e50;
              }

              .count {
                font-weight: bold;
                color: #e74c3c;
              }
            }
          }

          .order-detail {
            p {
              margin: 5px 0;
              color: #34495e;
            }
          }
        }
      }
    }

    button {
      padding: 8px 16px;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #2980b9;
      }

      &:disabled {
        background: #bdc3c7;
        cursor: not-allowed;
      }
    }

    .error-message {
      margin-top: 20px;
      padding: 15px;
      background: #f8d7da;
      border: 1px solid #f5c6cb;
      border-radius: 4px;
      color: #721c24;

      h4 {
        margin: 0 0 10px 0;
        color: #721c24;
      }

      p {
        margin: 0;
      }
    }
  }
}
</style>
