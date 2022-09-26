import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GroupOfPersonsOutline.svg';

export function GroupOfPersonsOutline(props: TProps) {
  return (
    <Icon {...props} name="GroupOfPersonsOutline">
      <SVG />
    </Icon>
  );
}
