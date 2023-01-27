import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StudyOutline.svg';

export function StudyOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="StudyOutline">
      <SVG />
    </Icon>
  );
}
