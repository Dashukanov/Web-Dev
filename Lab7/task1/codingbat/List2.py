#1
def count_evens(nums):
    return sum(1 for n in nums if n % 2 == 0)

#2
def big_diff(nums):
    return max(nums) - min(nums)

#3
def centered_average(nums):
    small = min(nums)
    big = max(nums)
    return (sum(nums) - small - big) / (len(nums) - 2)

#4
def sum67(nums):
    flag = True
    sm = 0
    for n in nums:
        if n == 6:
            flag = False
        if flag:
            sm += n
            continue
        if n == 7:
            flag = True
    return sm

#5
def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
    return False

#6
def centered_average(nums):
    small = min(nums)
    big = max(nums)
    return (sum(nums) - small - big) / (len(nums) - 2)