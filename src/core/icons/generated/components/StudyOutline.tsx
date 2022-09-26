import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StudyOutline.svg';

export function StudyOutline(props: TProps) {
  return (
    <Icon {...props} name="StudyOutline">
      <SVG />
    </Icon>
  );
}
