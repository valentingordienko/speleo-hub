import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VoteOutline.svg';

export function VoteOutline(props: TProps) {
  return (
    <Icon {...props} name="VoteOutline">
      <SVG />
    </Icon>
  );
}
