import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import DayNames, { dayNamesHeight } from './DayNames'

const buttonContainerHeight = 56
const buttonContainerMarginTop = 4
const buttonContainerMarginBottom = 8

export function getCalendarHeaderHeight(scrollMode: 'horizontal' | 'vertical') {
  if (scrollMode === 'horizontal') {
    return (
      buttonContainerHeight +
      buttonContainerMarginTop +
      buttonContainerMarginBottom +
      dayNamesHeight
    )
  }
  return dayNamesHeight
}

function CalendarHeader({
  scrollMode,
  onPrev,
  onNext,
}: {
  scrollMode: 'horizontal' | 'vertical'
  onPrev: () => any
  onNext: () => any
}) {
  const isHorizontal = scrollMode === 'horizontal'
  return (
    <View style={styles.datePickerHeader} pointerEvents={'box-none'}>
      {isHorizontal ? (
        <View style={styles.buttonContainer} pointerEvents={'box-none'}>
          <View style={styles.spacer} pointerEvents={'box-none'} />
          <View style={styles.buttonWrapper}>
            <IconButton icon="chevron-left" onPress={onPrev} />
          </View>

          <View style={styles.buttonWrapper}>
            <IconButton icon="chevron-right" onPress={onNext} />
          </View>
        </View>
      ) : null}
      <DayNames />
    </View>
  )
}

const styles = StyleSheet.create({
  datePickerHeader: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
  },
  buttonContainer: {
    height: buttonContainerHeight,
    marginTop: buttonContainerMarginTop,
    marginBottom: buttonContainerMarginBottom,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: { backgroundColor: '#fff' },
  spacer: { flex: 1 },
})

export default React.memo(CalendarHeader)
